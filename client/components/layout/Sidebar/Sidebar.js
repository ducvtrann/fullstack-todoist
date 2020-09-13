import React from 'react';
import './Sidebar.css';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

export const Sidebar = ({
  activeFilterContent,
  setActiveFilterContent,
  isProjectCollapse,
  setProjectCollapse,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-sticky">
        <ul className="sidebar-nav">
          <li>
            <a
              className={
                activeFilterContent === 'Inbox' ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setActiveFilterContent('Inbox')}
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
              onClick={() => setActiveFilterContent('Today')}
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
              onClick={() => setActiveFilterContent('Upcoming')}
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
            <a className="project__btn">+</a>
          </div>
          <div
            class={
              isProjectCollapse
                ? 'project__content__hidden'
                : 'project__content'
            }
          >
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
