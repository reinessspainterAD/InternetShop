import React, { useState }from 'react';
import styles from './Questions.module.css';

const Questions = ({questions}) => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleClick = (index) => {
        if(selectedQuestion === index){
            setSelectedQuestion(null);
        }else{
            setSelectedQuestion(index);
        }
    };

    return (
        <div className={styles.Questions}>
            <div className={styles.Labels}>
                <label className={styles.FirstLabel}>Часто задаваемые вопросы</label>
                <label className={styles.SecondLabel}>FAQ</label>
            </div>
            <div className={styles.QuestionsBox}>
                {questions.map((question, index) =>(
                    <div className={styles.OneQuestion === index ? styles.MarginBottom : ''} key={index}>
                        <div className={styles.ImTired}>
                            <label className={styles.QuestionLabel}>{question.Title}</label>
                            <button className={styles.ShowMessage} onClick={() => handleClick(index)}>
                                <img className={styles.BtnImg} src="./img/plus.png" alt="plus" />
                            </button>
                        </div>
                        {selectedQuestion === index && (
                            <div className={styles.AppearingMes}>
                                <div className={styles.Message}>{question.Message}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;