export const categorizesTodos = (todos) => {
  const result = { Inbox: [], Today: [], Upcoming: [] };

  result.Inbox = filterTodos('Inbox', todos);
  result.Today = filterTodos('Today', todos);
  result.Upcoming = filterTodos('Upcoming', todos);

  return result;
};

export const filterTodos = (name, array) => {
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

export const isProject = (name) => {
  const defaultCategories = ['Inbox', 'Today', 'Upcoming'];
  return defaultCategories.includes(name);
};

export const getProjectList = (array) => {
  return array.filter((item) => isProject(item));
};

export const projectTodos = (array) => {
  const result = {};

  array.forEach((project) => {
    if (result[project.name]) {
      result[project.name] = [...project.Todos, ...result[project.name]];
    } else {
      result[project.name] = [...project.Todos];
    }
  });

  return result;
};
