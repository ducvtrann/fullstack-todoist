import React, { useState } from 'react';
import axios from '../../../helpers/axios';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import './Sidebar.css';

export const Sidebar = ({
  activeFilterContent,
  setActiveFilterContent,
  projects,
}) => {
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
    setShowNewProject(!showNewProject);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-sticky">
        <ul className="sidebar-nav">
          <li>
            <a
              className={
                activeFilterContent === 'Inbox' ? 'nav-link active' : 'nav-link'
              }
              onClick={() => {
                if (isFilterProjectTodo) {
                  setFilterProjectTodo(!isFilterProjectTodo);
                }
                setActiveFilterContent('Inbox');
              }}
            >
              <FaInbox className="nav-link-icon" />
              Inbox
            </a>
          </li>
          <li>
            <a
              className={
                activeFilterContent === 'Today' ? 'nav-link active' : 'nav-link'
              }
              onClick={() => {
                if (isFilterProjectTodo) {
                  setFilterProjectTodo(!isFilterProjectTodo);
                }
                setActiveFilterContent('Today');
              }}
            >
              <FaRegCalendar className="nav-link-icon" />
              Today
            </a>
          </li>
          <li>
            <a
              className={
                activeFilterContent === 'Upcoming'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={() => {
                if (isFilterProjectTodo) {
                  setFilterProjectTodo(!isFilterProjectTodo);
                }

                setActiveFilterContent('Upcoming');
              }}
            >
              <FaRegCalendarAlt className="nav-link-icon" />
              Upcoming
            </a>
          </li>
        </ul>
        <div className="sidebar__project">
          <div className="sidebar_project__btn__container">
            <a
              className="nav-link project__btn"
              onClick={() => setProjectCollapse(!isProjectCollapse)}
            >
              <FaChevronDown className="nav-link-icon" />
              Projects
            </a>
            <a
              className="project__btn"
              onClick={() => setShowNewProject(!showNewProject)}
            >
              +
            </a>
          </div>
          <div
            className={
              isProjectCollapse
                ? 'project__content__hidden'
                : 'project__content'
            }
          >
            {projects.map((project, idx) => {
              return (
                <li key={idx}>
                  <a
                    onClick={() => {
                      setActiveFilterContent(project.name);
                    }}
                  >
                    {project.name}
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
      </div>
    </div>
  );
};
