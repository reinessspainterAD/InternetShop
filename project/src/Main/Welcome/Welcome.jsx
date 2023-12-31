import React from 'react';
import styles from "./Welcome.module.css";
import Button from "../CatalogBtn/Button.jsx";

const Welcome = () => {
    return (
        <section className={styles.Welcome}>
            <img className={styles.Img1} src='./img/Rectangle22.svg' alt='img1'/>
            <img className={styles.Img2} src="./img/Rectangle21.png" alt="img2"/>
            <label className={styles.Welcoming}>Добро пожаловать в <span className={styles.Cocteil}>Cocteil</span></label>
            <label className={styles.SmallText}>
                <p>Экономим Ваше время!</p>
                <p>Предлагаем лучшие цены!</p>
                <p>Доставляем в кратчайшие сроки!</p>
            </label>
            <Button />
        </section>
    );
};

export default Welcome;