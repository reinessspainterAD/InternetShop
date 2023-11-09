import React, { useState } from 'react';
import styles from "./Header.module.css";
import SideMenu from './SideMenu/SideMenu.jsx';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const[isOpen, setIsOpen] = useState(false);

    const MenuClick = () => {
        setIsOpen(!isOpen);
    }

    return (
         <div className={styles.Header}>
            <SideMenu MenuClick={MenuClick} IsOpen={isOpen}/>
            <div onClick={() => {setIsOpen(false)}}
               className={styles.Header} 
            >
                <button className={styles.Search}>
                    <img src='./img/clarity_search-line.svg' alt='search'/>
                </button>
                <input className={styles.Input} type='text' placeholder=' Поиск'></input>
                <NavLink to='/authorization'>    
                    <button className={styles.Avatar}>
                        <img src='./img/clarity_avatar-line.svg' alt='avatar'/>
                    </button>
                </NavLink>
                <button className={styles.Favourites}>
                    <img src='./img/clarity_heart-line.svg' alt='favourites'/>
                </button>
                <button className={styles.ShoppingBag}>
                    <img src='./img/clarity_shopping-bag-line.svg' alt='shoppingbag'/>
                </button>
            </div>
        </div>
    );
};

export default Header;