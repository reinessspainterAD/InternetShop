import React from 'react';
import styles from './Cooperation.module.css';

const Cooperation = () => {
    return (
        <div className={styles.Cooperation}>
            <label className={styles.CooperationLabel}>Сотрудничество с нами</label>
            <p className={styles.CooperationText}>
                Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут<br/>
                быть привлекательны и интересны с коммерческой точки зрения.
            </p>
            <div className={styles.Offerings}>
                <div className={styles.Offering}>
                    <label>Становитесь<br/>партнёром</label>
                    <p>Регистрируйтесь и<br/>переходите в свой кабинет</p>
                </div>
                <div className={styles.Offering}>
                    <label>Рекламируйте<br/>товары</label>
                    <p>Рекламируйте наши товары<br/>на форумах, сайтах, в социальных сетях</p>
                </div>
                <div className={styles.Offering}>
                    <label>Приводите<br/>покупателей</label>
                    <p>Приводите покупателей на<br/>наш сайт по уникальной ссылке</p>
                </div>
                <div className={styles.Offering}>
                    <label>Получайте<br/>бонусы</label>
                    <p>Копите бонусы от каждого<br/>оплаченного заказа</p>
                </div>
            </div>
            <label className={styles.CooperationLabel2}>Это выгодно. Какие преимущества?</label>
            <div className={styles.Advantages}>
                <div className={styles.Advantage}>
                    <img src="./img/gear.svg" alt="gear" />
                    <p>Автоматизация процессов</p>
                </div>
                <div className={styles.Advantage}>
                    <img src="./img/list.svg" alt="list" />
                    <p>Пополнение ассортимента</p>
                </div>
                <div className={styles.Advantage}>
                    <img src="./img/employee.svg" alt="employee" />
                    <p>Поддержка и обучение</p>
                </div>
                <div className={styles.Advantage}>
                    <img src="./img/coinBag.svg" alt="coinBag" />
                    <p>Бонусы за новых клиентов</p>
                </div>
            </div>
        </div>
    );
};

export default Cooperation;