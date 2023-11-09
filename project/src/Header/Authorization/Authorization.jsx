import React from 'react';
import styles from './Authorization.module.css';
import { NavLink } from 'react-router-dom';

const componentName = () => {
    return (
        <section className={styles.AuthorizationBox}>
            <img className={styles.Avatar} src='' alt="avatar" />
            <NavLink>
                <button className={styles.LoginBtn}>Войти</button>
            </NavLink>
            <div>
                <img src="" alt="cart" />
                <span>Корзина</span>
            </div>
            <div>
                <img src="" alt="izb" />
                <span>Избранное</span>
            </div>
            <div>
                <img src="" alt="seen" />
                <span>Просмотренное</span>
            </div>
        </section>
    );
};

export default componentName;