import React from 'react';
import styles from './Authorization.module.css';
import { NavLink } from 'react-router-dom';

const Authorization = ({ AuthClick, AuthIsOpen }) => {
    return (
        <>    
            <div>
                <button className={styles.Avatar}
                    onClick={AuthClick}
                >
                    <img src='./img/clarity_avatar-line.svg' alt='avatar'/>
                </button>
            </div>
            {AuthIsOpen && (
                <section className={styles.AuthorizationBox}>
                    <img className={styles.Avatarr} src='./img/Ellipse47.svg' alt="avatar" /><br/>
                    <NavLink to='/login'>
                        <button className={styles.LoginBtn}>Войти</button>
                    </NavLink>
                    <div className={styles.Cart}>
                        <img src="./img/clarity_shopping-bag-line.svg" alt="cart" />
                        <span>Корзина</span>
                    </div>
                    <div>
                        <img src="./img/clarity_heart-line.svg" alt="izb" />
                        <span>Избранное</span>
                    </div>
                    <div>
                        <img src="./img/eye.svg" alt="seen" />
                        <span>Просмотренное</span>
                    </div>
                </section>
            )}
        </>
    );
};

export default Authorization;