import React from 'react';
import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.OutsideSpace}>
            <div className={styles.Login}>    
                <NavLink to='/'>
                    <button className={styles.CloseBtn}>
                        <img src="./img/cross.svg" alt="close" />
                    </button>
                </NavLink>
                <label className={styles.LoginLabel}>Вход в личный кабинет</label>
                <div className={styles.InputDiv}>
                    <input 
                        className={styles.Email}
                        type='text'
                        placeholder='Электронная почта'    
                    ></input>
                    <input 
                        className={styles.Password}
                        type='text'
                        placeholder='Пароль'        
                    ></input>
                </div>
                <label className={styles.PasswordLoss}>Не помню пароль</label>
                <div className={styles.Buttons}>
                    <NavLink to='/'>
                        <button className={styles.LoginBtn}>Войти в кабинет</button>
                    </NavLink>
                    <NavLink to='/registration'>
                        <button className={styles.RegisterBtn}>Регистрация</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;