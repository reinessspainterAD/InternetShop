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
                <div>
                    Предлагаем самые<br/>
                    выгодные цены
                </div>
                <div>
                    Наши покупатели всегда<br/>
                    остаются довольны
                </div>
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
                <div>
                    Пункты выдачи заказов<br/>
                    рядом с домом
                </div>
            </div>
        </div>
    );
};

export default QAnswers;