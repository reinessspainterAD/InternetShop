import React from 'react';
import { useState } from "react";
import Welcome from './Welcome/Welcome.jsx';
import styles from './Main.module.css';
import QAnswers from './Q&A/QAnswers.jsx';
import Promotion from "./Promotion/Promotion.jsx"
import Reviews from './Reviews/Review.jsx';
import Questions from './Questions/Questions.jsx';
import Cooperation from './Cooperation/Cooperation.jsx';
import Invitation from './InvitationToCooperation/Invitation.jsx';



const Body = () => {
    let [promotions, setPromotions] = useState([
        {
            id: 1,
            img: "./img/Rectangle23.jpg",
            priceProm: "50.00р",
            price: "65.00р",
            productName: "Блузка женская классная"
        },
        {
            id: 2,
            img: "./img/Rectangle24.jpg",
            priceProm: "50.00р",
            price: "65.00р",
            productName: "Блузка женская классная"
        },
        {
            id: 3,
            img: "./img/Rectangle25.jpg",
            priceProm: "50.00р",
            price: "65.00р",
            productName: "Блузка женская классная"
        },
        {
            id: 4,
            img: "./img/Rectangle26.jpg",
            priceProm: "50.00р",
            price: "65.00р",
            productName: "Блузка женская классная"
        }
    ]);
    
    let [review, setReview] = useState([
        {
            profileImg: "./img/profile1.png",
            score: "./img/Score.png",
            comment: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            name: "Анна Котлова",
            date: "23.05.2021"
        },
        {
            profileImg: "./img/profile2.png",
            score: "./img/Score.png",
            comment: "Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.",
            name: "Ксения Козлова",
            date: "23.05.2021"
        }
    ])

    let [questions, setQuestions] = useState([
        {
            Title: "Как сделать заказ?",
            Message: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар."
        },
        {
            Title: "Способы оплаты",
            Message: "Да фиг его знает. Я здесь практикой занимаюсь, а не администрированием:3"
        },
        {
            Title: "Доставка",
            Message:"Да фиг его знает. Я здесь практикой занимаюсь, а не администрированием:3"
        },
        {
            Title: "Сроки доставки",
            Message:"Да фиг его знает. Я здесь практикой занимаюсь, а не администрированием:3"
        },
        {
            Title: "Как сделать обмен?",
            Message:"Да фиг его знает. Я здесь практикой занимаюсь, а не администрированием:3"
        },
        {
            Title: "Как сделать возврат?",
            Message:"Да фиг его знает. Я здесь практикой занимаюсь, а не администрированием:3"
        },
        {
            Title: "Куда и когда вернутся деньги за возвращённый товар?",
            Message:"Да фиг его знает. Я здесь практикой занимаюсь, а не администрированием:3"
        }
    ])

    return (
        <div className={styles.Body} >
            <Welcome />
            <div className={styles.Circle}></div>
            <QAnswers />
            <Promotion promotions={promotions}/>
            <Reviews review={review}/>
            <div className={styles.Circle2}></div>
            <Questions questions={questions} />
            <Cooperation />
            <Invitation />
            <div className={styles.Circle3}></div>
            <div className={styles.Circle4}></div>
        </div>
    );
};

export default Body;