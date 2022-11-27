import React, {useContext} from 'react';
import '../styles/wishlist.scss'
import FavItem from '../components/UI/WishListItem';
import {ListContext} from '../components/context/wishListContext'

const WishList = () => {
    // const favcars = newcars.filter((car) => {
    //     return car.
    // })
    const {listItems} = useContext(ListContext)
    return (
        <div className='list__container'>
            <div className='list__items'>
                {listItems.map((item) => (
                    <FavItem item={item} key={item.id} />
                ))} </div>
        </div>
    )
}

export default WishList