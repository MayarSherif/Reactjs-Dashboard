import React from "react";

const SearchBox =(props)=>{
    
        return(
            <input className="active__search__box" type="search" placeholder="search" onChange={props.handler}/>
        );
    
}
export default SearchBox;