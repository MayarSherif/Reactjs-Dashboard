import React from "react";
import "../styles/bookings.scss";
import { useState, useContext } from "react";

import {CarContext} from "../components/context/carContext";
import CarItem from "../components/UI/CarItem";
import SearchBox from "../components/search-box/search-box";

const Bookings = () => {
  const {cars} = useContext(CarContext)
  const [searchField, setSearchField] = useState('');


  const newcars = cars.filter((car)=>{
    return car.category.toLocaleLowerCase().includes(searchField);
  })

  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>
        <SearchBox handler={onSearchChange}/>
        <div className="booking__car-list">
          {newcars.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
