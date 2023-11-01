import React from 'react';
import { useState } from "react";
import Welcome from './Welcome/Welcome.jsx';
import styles from './Body.module.css';
import QAnswers from './Q&A/QAnswers.jsx';
import Promotion from "./Promotion/Promotion.jsx"




const Body = () => {
    let [promotions, setPromotions] = useState([
        {
            id: 1,
            img: "./img/Rectangle23.svg",
            priceProm: "50.00р",
            price: "65.00р",
            productName: "Блузка женская классная"
        },
        {
            id: 2,
            img: "./img/Rectangle24.svg",
            priceProm: "50.00р",
            price: "65.00р",
            productName: "Блузка женская классная"
        },
        {
            id: 3,
            img: "./img/Rectangle25.svg",
            priceProm: "50.00р",
            price: "65.00р",
            productName: "Блузка женская классная"
        },
        {
            id: 4,
            img: "./img/Rectangle26.svg",
            priceProm: "50.00р",
            price: "65.00р",
            productName: "Блузка женская классная"
        }
    ]);
    
    return (
        <div className={styles.Body}>
            <Welcome />
            <div className={styles.Circle}></div>
            <QAnswers />
            <Promotion promotions={promotions}/>
        </div>
    );
};

export default Body;