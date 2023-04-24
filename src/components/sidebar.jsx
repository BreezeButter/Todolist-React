import {  FaInbox, FaCalendarAlt, FaCalendar, FaChevronCircleDown } from "react-icons/fa";

export function Sidebar (){
    return (
        <aside className="sidebar">
        <section className="sidebar__generic">
          <ul className="generic__lists">
            <li className="active">
              <span>
                <FaInbox />
              </span>
              <h6>Inbox</h6>
            </li>
            <li>
              <span>
                <FaCalendar />
              </span>
              <h6>Today</h6>
            </li>
            <li>
              <span>
                <FaCalendarAlt />
              </span>
              <h6>Next 7 Days</h6>
            </li>
          </ul>
        </section>
        <section className="sidebar__middle">

          <span><FaChevronCircleDown/></span>
          <h6>Project</h6>
        </section>
        <section className="sidebar__project">
          <ul className="project__list">
            <li>
              <span>
                <FaInbox />
              </span>
              <h6>Project-A</h6>
            </li>
            <li>
              <span>
                <FaInbox />
              </span>
              <h6>Project-B</h6>
            </li>
          </ul>
        </section>
      </aside>
    )
}