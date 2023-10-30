import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.Header}>
            <button className={styles.Menu}>
                <img  src="./img/clarity_menu-line.svg" alt="menu" />
            </button>
            <button className={styles.Search}>
                <img src='./img/clarity_search-line.svg' alt='search'/>
            </button>
            <input className={styles.Input} type='text' placeholder=' Поиск'></input>
            <button className={styles.Avatar}>
                <img src='./img/clarity_avatar-line.svg' alt='avatar'/>
            </button>
            <button className={styles.Favourites}>
                <img src='./img/clarity_heart-line.svg' alt='favourites'/>
            </button>
            <button className={styles.ShoppingBag}>
                <img src='./img/clarity_shopping-bag-line.svg' alt='shoppingbag'/>
            </button>
        </div>
    );
};

export default Header;