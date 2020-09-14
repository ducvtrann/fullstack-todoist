import React from 'react';

export const SidebarCategory = ({
  name,
  activeFilterContent,
  setActiveFilterContent,
  icon,
}) => {
  return (
    <li>
      <div
        className={
          activeFilterContent === name ? 'nav_link active' : 'nav_link'
        }
        onClick={() => {
          setActiveFilterContent(name);
        }}
      >
        <span className="nav_link_icon">{icon()}</span>
        <span>{name}</span>
      </div>
    </li>
  );
};
