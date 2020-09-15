import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

export const SidebarCategory = ({
  name,
  activeFilterContent,
  setActiveFilterContent,
  icon,
  updateProject,
  deleteProject,
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
        <div className="d_flex">
          {icon && <div className="nav_link_icon">{icon()} </div>}
          <div>{name}</div>
        </div>
        {deleteProject && (
          <div className="icon_container">
            <button
              className="item_icon"
              onClick={(e) => deleteProject(e, name)}
            >
              <FaTrashAlt />
            </button>
            <button
              className="item_icon"
              onClick={(e) => updateProject(e, name)}
            >
              <FaPencilAlt />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
