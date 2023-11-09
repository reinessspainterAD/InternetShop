import React, { useState } from 'react';
import styles from './SideMenu.module.css';
import Categories from '../Categories/Categories.jsx';

const SideMenu = ({MenuClick, IsOpen}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = {
        Женщинам: ['Майки', 'Костюмы', 'Блузки']
        //Добавить остальные категории
    };

    const CategorySelect = (category) => {
        setSelectedCategory(category);
        console.log("ПРив!")
    };
    
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
                        <p onClick={() => CategorySelect('Женщинам')}>Женщинам</p>
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