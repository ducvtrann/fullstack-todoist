import React, { useState } from 'react';
import axios from '../../../helpers/axios';
import { FaChevronDown } from 'react-icons/fa';
import { SidebarCategory } from './SidebarCategory';

export const SidebarProject = ({
  projects,
  activeFilterContent,
  setActiveFilterContent,
  fetchData,
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
    fetchData();
    setProjectName('');
    setProjectCollapse(false);
    setShowNewProject(false);
  };

  const updateProject = async (e) => {
    console.log(projectName);
    e.preventDefault();
    await axios.patch(`/projects/${name}`, { name: projectName });
    fetchData();
  };

  const deleteProject = async (e, name) => {
    console.log(name);
    e.preventDefault();
    await axios.delete(`/projects/${name}`, { name: 'John' });
    setActiveFilterContent('Inbox');
    fetchData();
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
        {projects.map((project, idx) => (
          <SidebarCategory
            key={idx}
            name={project}
            activeFilterContent={activeFilterContent}
            setActiveFilterContent={setActiveFilterContent}
            updateProject={updateProject}
            deleteProject={deleteProject}
          />
        ))}
      </div>
      <div className={showNewProject ? null : 'new_project'}>
        <form onSubmit={(e) => addProject(e)}>
          <input
            className="add_project_input"
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
