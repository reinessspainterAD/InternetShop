import React, { useState } from 'react';
import styles from "./Header.module.css";
import SideMenu from './SideMenu/SideMenu.jsx';
import Authorization from './Authorization/Authorization.jsx';

const Header = () => {
    const[isOpen, setIsOpen] = useState(false);
    const[AuthIsOpen, setAuthIsOpen] = useState(false);

    const MenuClick = () => {
        setIsOpen(!isOpen);
    }

    const AuthClick = () =>{
        setAuthIsOpen(!AuthIsOpen)
    }
    return (
        <header className={styles.Header}>
            <SideMenu MenuClick={MenuClick} IsOpen={isOpen}/>
            <div onClick={() => {setIsOpen(false)}}
               className={styles.Header} 
            >
                <button className={styles.Search}>
                    <img src='./img/clarity_search-line.svg' alt='search'/>
                </button>
                <input className={styles.Input} type='text' placeholder=' Поиск'></input>
                <Authorization AuthClick={AuthClick} AuthIsOpen={AuthIsOpen}/>
                <button className={styles.Favourites}>
                    <img src='./img/clarity_heart-line.svg' alt='favourites'/>
                </button>
                <button className={styles.ShoppingBag}>
                    <img src='./img/clarity_shopping-bag-line.svg' alt='shoppingbag'/>
                </button>
            </div>
        </header>
    );
};

export default Header;