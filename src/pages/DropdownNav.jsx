import React from 'react';
import navLinks from "../assets/data/navLinks";
import { NavLink} from "react-router-dom";

const DropdownNav = () => {
  return (
    <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default DropdownNav