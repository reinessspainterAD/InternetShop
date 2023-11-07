import React from 'react';
import styles from './QAnswers.module.css';

const QAnswers = () => {
    return (
        <div className={styles.QAnswers}>
            <div className={styles.Question}>Почему выбирают нас?</div>
            <div className={styles.FirstLine}>
                <div>
                    Скидки постоянным<br/>
                    клиентам от 5%
                </div>
                <img className={styles.Ellipse1} src="./img/Ellipse4.svg" alt="Ellipse" />
                <div>
                    Предлагаем самые<br/>
                    выгодные цены
                </div>
                <div>
                    Наши покупатели всегда<br/>
                    остаются довольны
                </div>
                <img className={styles.Ellipse2} src="./img/Ellipse4.svg" alt="Ellipse" />
                <div>
                    Широкий ассортимент<br/>
                    товаров для всей семьи
                </div>
            </div>
            <div className={styles.SecondLine}>
                <div>
                    Возможность доставки в<br/>
                    любой город Беларуси
                </div>
                <img className={styles.Ellipse3} src="./img/Ellipse4.svg" alt="Ellipse" />
                <div>
                    Пункты выдачи заказов<br/>
                    рядом с домом
                </div>
                <img className={styles.Ellipse4} src="./img/Ellipse4.svg" alt="Ellipse" />
            </div>
            <button className={styles.Up}> 
                <img src="./img/UpArrow.png" alt="UpArrow" />
            </button>
            <button className={styles.Chat}> 
                <img src="./img/chat.svg" alt="chat" />
            </button>
        </div>
    );
};

export default QAnswers;