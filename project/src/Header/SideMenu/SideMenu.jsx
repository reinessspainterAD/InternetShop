import React, { useState } from 'react';
import styles from './SideMenu.module.css';

const SideMenu = ({MenuClick, IsOpen}) => {
    return (
        <>
            <button 
                className={styles.Menu}
                onClick={MenuClick}
            >
                <img src="./img/clarity_menu-line.svg" alt="menu" />
            </button>
            {IsOpen && (
                <div className={styles.OpenMenu}>
                    <img src="./img/logoMenu.png" alt="logo" />
                        <p>Женщинам</p>
                        <p>Мужчинам</p>
                        <p>Детям</p>
                        <p>Обувь</p>
                        <p>Игрушки</p>
                        <p>Аксессуары</p>
                        <p>Большие размеры</p>
                        <p>Дополнительно</p>
                        <p>Акции</p>
                </div>
                
            )}
        </>


    );
};

export default SideMenu;