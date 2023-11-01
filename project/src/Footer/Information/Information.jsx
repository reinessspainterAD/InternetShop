import React from 'react';
import styles from "./Information.module.css";
const Information = () => {
    return (
        <div className={styles.Information}>
            <label className={styles.InformationLabel}>Информация</label>
            <ul className={styles.InformationUl}>
                <li>
                    <a>Главная</a>
                </li>
                <li>
                    <a>Акции</a>
                </li>
                <li>
                    <a>Каталог</a>
                </li>
                <li>
                    <a>Возврат</a>
                </li>
                <li>
                    <a>Доставка</a>
                </li>
                <li>
                    <a>Партнёрам</a>
                </li>
                <li>
                    <a>Способы оплаты</a>
                </li>
                <li>
                    <a>Как сделать заказ?</a>
                </li>
            </ul>
        </div>
    );
};

export default Information;