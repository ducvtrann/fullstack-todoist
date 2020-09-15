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
        {icon && <div className="nav_link_icon">{icon()} </div>}
        <div>{name}</div>
        {deleteProject && (
          <div className="project_action_item">
            <button onClick={(e) => deleteProject(e, name)}>
              <FaTrashAlt />
            </button>
            <button onClick={(e) => updateProject(e, name)}>
              <FaPencilAlt />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};
