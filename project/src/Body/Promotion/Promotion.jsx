import React from 'react';
import styles from "./Promotion.module.css";

const Promotion = ({promotions}) => {
    let mapping = promotions.map(prom =>(
        <>
            <div className={styles.Product}>
                <img className={styles.ProductImg} src={prom.img} />
                <div className={styles.LabelDiv}>
                    <label className={styles.PromPrice}>{prom.priceProm}</label>
                    <label className={styles.RegPrice}>{prom.price}</label>
                </div>
                <label className={styles.ProductName}>{prom.productName}</label>
                <img className={styles.Heart} src='./img/clarity_heart-line.svg' alt='favourites'/>
                <img className={styles.Bag} src='./img/clarity_shopping-bag-line.svg' alt='shoppingbag'/>
                <button className={styles.Detailed}>
                    <label>Подробнее</label>
                    <img className={styles.ProductImgg} src='./img/Arrow9.svg' alt='arrow' />
                </button>
                <img className={styles.Revs} src='./img/revs.svg' alt='revs'/>
            </div>
        </>
    ))

    // function ScrollToRight(){

    // }
    return (
        <div className={styles.Promotion}>
            <label className={styles.Text1}>Успей купить!</label>
            <label className={styles.Text2}>Акции</label>
            <div className={styles.ProductionBox}>
                {mapping}
            </div>
            <button className={styles.Scroller}>
                <img className={styles.ScrollerImg} src="./img/Arrow11.png" alt="scroller" />
            </button>
        </div>
            
    );
};

export default Promotion;