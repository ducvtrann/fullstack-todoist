import React from 'react';
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { SidebarCategory } from './SidebarCategory';
import { SidebarProject } from './SidebarProject';
import './Sidebar.css';

export const Sidebar = ({
  activeFilterContent,
  setActiveFilterContent,
  projects,
  fetchData,
}) => {
  const defaultCategories = ['Inbox', 'Today', 'Upcoming'];
  const icons = [FaInbox, FaRegCalendarAlt, FaRegCalendar];

  return (
    <div className="sidebar">
      <div className="sidebar_sticky">
        <ul className="sidebar_nav">
          {defaultCategories.map((el, idx) => {
            return (
              <SidebarCategory
                key={idx}
                name={el}
                activeFilterContent={activeFilterContent}
                setActiveFilterContent={setActiveFilterContent}
                icon={icons[idx]}
              />
            );
          })}
        </ul>
        <SidebarProject
          projects={projects}
          activeFilterContent={activeFilterContent}
          setActiveFilterContent={setActiveFilterContent}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};
