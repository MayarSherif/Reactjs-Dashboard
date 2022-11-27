import React ,{useState, useContext} from "react";
import {ListContext} from '../context/wishListContext';

const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;

  const { addItemToList } = useContext(ListContext)
  const [isActive, setIsActive] = useState(false);

  // const wishhandler = () => {
    
  // }

  const handleClick = () => {
    addItemToList(props.item);
    setIsActive(current => !current);
 
  };

  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-title">
          <h3>{carName}</h3>
          <span>
            <i class="ri-heart-line" style={{color: isActive ? 'red' : ''}} onClick={handleClick}></i>
          </span>
        </div>
        <p>{category}</p> 
      </div>

      <div className="car__img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i class="ri-user-line"></i> {groupSize}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            {type}
          </p>
        </div>

        <p className="car__rent">${rentPrice}/d</p>
      </div>
    </div>
  );
};

export default CarItem;
