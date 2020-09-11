import React from 'react';
import './Sidebar.css';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

export const Sidebar = ({ activeFilterContent, setActiveFilterContent }) => {
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
              <FaRegCalendarAlt className="nav-link-icon" />7 Days
            </a>
          </li>
        </ul>
        <div className="sidebar-project">
          <a className="nav-link">
            <FaChevronDown className="nav-link-icon" />
            Projects
          </a>
          <a>+</a>
        </div>
      </div>
    </div>
  );
};
