import React from 'react';
import styles from "./MyAccount.module.css";

const MyAccount = () => {
    return (
        <section className={styles.MyAccount}>
            <label className={styles.MyAccountLabel}>Мой кабинет</label>
            <ul className={styles.MyAccountUl}>
                <li>
                    <a>Мои заказы</a>
                </li>
                <li>
                    <a>Мои адреса</a>
                </li>
                <li>
                    <a>Мои скидки</a>
                </li>
                <li>
                    <a>Моя информация</a>
                </li>
            </ul>
        </section>
    );
};

export default MyAccount;