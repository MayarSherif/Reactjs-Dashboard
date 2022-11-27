import React, {createContext, useState} from 'react';
import CARS from '../../assets/data/booking-cars';

export const CarContext = createContext({
    cars: [],
});


export const CarProvider = ({children}) => {

  const [cars, setCars] = useState(CARS);
  const value = {cars, setCars};
    return (
    <CarContext.Provider value={value}>{children}</CarContext.Provider>
  )
}