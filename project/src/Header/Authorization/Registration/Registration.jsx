import React, { useState } from 'react';
import styles from './Registration.module.css';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const [agreed, setAgreed] = useState(false);

    const CheckboxChange = () => {
        setAgreed(!agreed);
    };

    return (
        <div className={styles.OutsideSpace}>
            <div className={styles.Registration}>
                <NavLink to='/'>
                    <button className={styles.CloseBtn}>
                        <img src="./img/cross.svg" alt="close" />
                    </button>
                </NavLink>
                <label className={styles.RegistrationLabel}>Регистрация</label>
                <div className={styles.InputDiv}>
                    <input 
                        className={styles.FIO}
                        type='text'
                        placeholder='ФИО'    
                    ></input>
                    <input 
                        className={styles.PhoneNumber}
                        type='text'
                        placeholder='Контактный номер'        
                    ></input>
                    <input 
                        className={styles.Index}
                        type='text'
                        placeholder='Индекс'        
                    ></input>
                    <input 
                        className={styles.Age}
                        type='text'
                        placeholder='Ваш полный возраст (Только РБ)'        
                    ></input>
                    <input 
                        className={styles.Email}
                        type='text'
                        placeholder='Элетронная почта'        
                    ></input>
                    <input 
                        className={styles.Comment}
                        type='text'
                        placeholder='Комментарий'        
                    ></input>
                </div>
                <div className={styles.Checkbox}>
                        <label className={styles.CheckboxLabel}>
                            <input
                                type='checkbox'
                                id='consentCheckbox'
                                className={styles.HiddenCheckbox}
                                checked={agreed}
                                onChange={CheckboxChange}
                            />
                            <div className={styles.CustomCheckbox}></div>
                            <span className={styles.CheckboxText}>Даю согласие на обработку персональных данных</span>
                        </label>
                </div>
                <div className={styles.Buttons}>
                    <NavLink to='/'>
                        <button className={styles.LoginBtn}>Отправить</button>
                    </NavLink>
                    <NavLink to='/login'>
                        <button className={styles.RegisterBtn}>Войти в кабинет</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Registration;