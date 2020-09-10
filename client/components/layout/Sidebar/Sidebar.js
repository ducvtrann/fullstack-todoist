import React from 'react';
import './Sidebar.css';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import { MdAddBox } from 'react-icons/md';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-sticky">
        <ul className="sidebar-nav">
          <li>
            <a className="nav-link">
              <FaInbox className="nav-link-icon" />
              Inbox
            </a>
          </li>
          <li>
            <a className="nav-link">
              <FaRegCalendar className="nav-link-icon" />
              Today
            </a>
          </li>
          <li>
            <a className="nav-link">
              <FaRegCalendarAlt className="nav-link-icon" />
              Upcoming
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
