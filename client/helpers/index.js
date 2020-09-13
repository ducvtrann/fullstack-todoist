export const filteredGroup = (name, array) => {
  if (name === 'Inbox') return array;

  if (name === 'Today') {
    return array.filter((todo) => {
      return isToday(todo.createdAt);
    });
  }

  if (name === 'Upcoming') {
    return array.filter((todo) => {
      return !isToday(todo.createdAt);
    });
  }
};

const isToday = (checkDate) => {
  const date = new Date(checkDate);
  const today = new Date();
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
};
