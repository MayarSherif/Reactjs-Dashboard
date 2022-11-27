import React, {createContext, useState} from 'react';


const addThisItem = (listItems, itemToAdd) => {

  const isExisting = listItems.find(
      (listItem) => listItem.id === itemToAdd.id
    )
  if(isExisting){
    const filtered = listItems.filter((item) => {
      return item.id !== itemToAdd.id;
    })
    return filtered;
  }

  return [...listItems, {...itemToAdd}]
}

export const ListContext = createContext({
    isListOpen: false,
    isListOpenNav: false,
    setIsListOpen: () => {},
    setIsListOpenNav: () => {},
    listItems: [],
    addItemToList: () => {},
});


export const ListProvider = ({children}) => {

  const [isListOpen, setIsListOpen] = useState(false);
  const [isListOpenNav, setIsListOpenNav] = useState(false);
  const [listItems, setListItems] = useState([]);
  const addItemToList = (itemToAdd) => {
    setListItems(addThisItem(listItems,itemToAdd))
  };

  const value = {isListOpen, setIsListOpen, isListOpenNav, setIsListOpenNav, listItems, addItemToList};
    return (
    <ListContext.Provider value={value}>{children}</ListContext.Provider>
  )
}