import React, { useState } from 'react';
import axios from '../../../helpers/axios';
import { FaChevronDown } from 'react-icons/fa';

export const SidebarProject = ({ projects, setActiveFilterContent }) => {
  const [projectName, setProjectName] = useState('');
  const [isProjectCollapse, setProjectCollapse] = useState(true);
  const [showNewProject, setShowNewProject] = useState(false);

  const handleChange = (e) => {
    setProjectName(e.target.value);
  };
  const addProject = async (e) => {
    e.preventDefault();
    await axios.post('/projects', { name: projectName });
    setProjectName('');
    setProjectCollapse(false);
    setShowNewProject(false);
  };

  return (
    <div className="sidebar_project">
      <div className="sidebar_project_btn_container">
        <div
          className="nav_link project_btn"
          onClick={() => setProjectCollapse(!isProjectCollapse)}
        >
          <FaChevronDown className="nav_link_icon" />
          Projects
        </div>
        <div
          className="project_btn"
          onClick={() => setShowNewProject(!showNewProject)}
        >
          +
        </div>
      </div>
      <div
        className={
          isProjectCollapse ? 'project_content_hidden' : 'project_content'
        }
      >
        {projects.map((project, idx) => {
          return (
            <li key={idx}>
              <a
                onClick={() => {
                  setActiveFilterContent(project);
                }}
              >
                {project}
              </a>
            </li>
          );
        })}
      </div>
      <div className={showNewProject ? null : 'new_project'}>
        <form onSubmit={(e) => addProject(e)}>
          <input
            type="text"
            placeholder="Add project"
            value={projectName}
            onChange={(e) => handleChange(e)}
          ></input>
        </form>
      </div>
    </div>
  );
};
