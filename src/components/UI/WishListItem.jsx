import React  from "react";
// 

const WishListItem = (props) => {
  const { imgUrl, carName} = props.item;

  return (
    <div className="fav__item">
        <img src={imgUrl} alt="" />
        <p>{carName}</p>
    </div>
  );
};

export default WishListItem;
