import React , {useContext}from "react";
import { Link} from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import { useSelector} from "react-redux";
import WishList from '../../pages/WishList';
import "./top-nav.scss";
import { ListContext } from '../../components/context/wishListContext';

const TopNav = () => {
  const{currentUser} = useSelector( (state) => state.userRed );
  const {displayName} = currentUser;
  const {isListOpen, setIsListOpen} = useContext(ListContext);
  const handler = () => {
    setIsListOpen(!isListOpen)
  }
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="search or type" />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
        <div className="top__nav-right">
          <span className="notification">
            <i class="ri-notification-3-line"></i>
            <span className="badge">1</span>
          </span>
          <p onClick={handler}>Wishlist</p>
          <p>{displayName}</p>
          <div className="profile">
            <Link to="/settings">
              <img src={profileImg} alt="" />
            </Link>
          </div>
          
        </div>
        {isListOpen && <WishList />}
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default TopNav;
