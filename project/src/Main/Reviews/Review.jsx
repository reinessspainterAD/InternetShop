import React from 'react';
import styles from "./Reviews.module.css";

const Reviews = ({review}) => {
    let ReviewBox = review.map(rev => (
        <>
            <div className={styles.Shadow}>    
                <img className={styles.profileImg} src={rev.profileImg} alt='profileImg'/>
                <div className={styles.RevBox}>
                    <img className={styles.scoreImg} src={rev.score} alt='score'/>
                    <div className={styles.Comment}>{rev.comment}</div>
                    <label className={styles.Name}>{rev.name}</label>
                    <label className={styles.Date}>{rev.date}</label>
                </div>
            </div>
        </>
    ))
    
    return (
        <section className={styles.Reviews}>
            <label className={styles.ReviewsLabel}>Отзывы наших покупателей</label>
            <div className={styles.ReviewBoxes}>
                {ReviewBox}
                <button className={styles.ScrollBtn}>
                    <img src="./img/Arrow8.png" alt="Arrow" />
                </button>
            </div>
            <button className={styles.AddReview}>
                <label>Добавить отзыв</label>
            </button>
        </section>
    );
};

export default Reviews;