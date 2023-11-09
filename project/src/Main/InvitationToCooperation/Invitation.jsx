import React, { useState } from 'react';
import styles from './Invitation.module.css';

const Invitation = () => {
    const [agreed, setAgreed] = useState(false);

    const CheckboxChange = () => {
        setAgreed(!agreed);
    };

    return (
        <section className={styles.OutsideBox}>
            <div className={styles.InsideBox}>
                <label className={styles.InvitationLabel}>
                    Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров
                </label>
                <div className={styles.Inputs}>
                    <input
                        className={styles.Name}
                        type='text'
                        placeholder='Ваше имя'
                    ></input>
                    <input
                        className={styles.PhoneNumber}
                        type='text'
                        placeholder='Номер телефона'
                    ></input>
                    <input
                        className={styles.Email}
                        type='text'
                        placeholder='Электронная почта'
                    ></input>
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
                    <button className={styles.Send}>
                        <label>Отправить</label>
                        <img src="./img/Arrow9white.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Invitation;