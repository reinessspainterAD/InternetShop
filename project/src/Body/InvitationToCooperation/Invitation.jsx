import React from 'react';
import styles from './Invitation.module.css';

const Invitation = () => {
    return (
        <div className={styles.OutsideBox}>
            <div className={styles.InsideBox}>
                <label className={styles.InvitationLabel}>Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</label>
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
                    <div role='checkbox'></div>
                    <button className={styles.Send}>
                        <label>Отправить</label>
                        <img src="./img/Arrow9white.svg" alt="Arrow" />
                    </button>
                </div>
            
            </div>
        </div>
    );
};

export default Invitation;