import React, {createContext, useState} from 'react';
import { signoutUser } from "../../utils/firebase/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>{}
});


export const UserProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};
  signoutUser();
    return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}