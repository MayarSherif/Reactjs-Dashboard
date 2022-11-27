import React, { useContext } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import DropdownNav from '../../pages/DropdownNav';
import navLinks from "../../assets/data/navLinks";
import "./sidebar.scss";
import { signoutUser } from '../../utils/firebase/firebase'
import { UserContext } from '../context/userContext'
import { ListContext } from '../../components/context/wishListContext';


const Sidebar = () => {
  const navigation = useNavigate();
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const {isListOpenNav, setIsListOpenNav} = useContext(ListContext);


  const signOutHandler = async () => {

    await signoutUser();
    setCurrentUser(null);

    if(!currentUser){
      window.location.pathname = '/signin';
    }
      
    
  }

  // const navigate = () => {
  //   if (!currentUser) {
  //     window.location.pathname = '/signin';
  //   }
  // }
  const handler = () => {
    setIsListOpenNav(!isListOpenNav)
  }
  return (

    <div className="sidebar">
      <div className="sidebar__top">
        <h2 onClick={handler}>
          <span>
            <i class="ri-taxi-line"></i>
          </span>{" "}
          Motiv.
        </h2>
        <div className='dropdown__nav'>
        {isListOpenNav && <DropdownNav  />}
        </div>
        
      </div>

      <div className="sidebar__content">
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

        <div className="sidebar__bottom">

          <button onClick={signOutHandler}>
            <i class="ri-logout-circle-r-line"></i> Logout
          </button>


        </div>
      </div>
    </div>

  );
};

export default Sidebar;
