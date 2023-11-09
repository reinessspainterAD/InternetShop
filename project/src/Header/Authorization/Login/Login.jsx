import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.Login}>
            <button className={styles.CloseBtn}>
                <img src="./img/cross.svg" alt="close" />
            </button>
            <label className={styles.LoginLabel}>Вход в личный кабинет</label>
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
            {/*checkbox*/}
            <div>
                <button className={styles.LoginBtn}>Войти в кабинет</button>
                <button className={styles.RegisterBtn}>Регистрация</button>
            </div>
            

            
        </div>
    );
};

export default Login;