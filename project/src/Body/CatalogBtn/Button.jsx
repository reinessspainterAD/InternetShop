import React from 'react';
import styles from "./Button.module.css";

const Button = () => {
    return (
        <div className={styles.BtnWrapper}>
            <button className={styles.Btn}>
                <label className={styles.BtnLabel}>Каталог</label>
                <img src="./img/Arrow.svg" alt="arrow"/>
            </button>
        </div>
    );
};

export default Button;
