import React from 'react';
import styles from "./SocialMedia.module.css";
const SocialMedia = () => {
    return (
        <div className={styles.SocialMedia}>
            <label className={styles.SocialMediaLabel}>Соц. сети</label>
            <img className={styles.SocialMediaImage} src='./img/footerSocialMedia.svg' alt='images'/>
            <div className={styles.PhoneNumber}>
                <img src='./img/carbon_phone-voice.svg' alt='phone'/>
                <label>+375255990755</label>
            </div>
            <div className={styles.WorkTime}>
                <img src='./img/carbon_time.svg' alt='time'/>
                <label>круглосуточно, без выходных</label>
            </div>
        </div>
    );
};

export default SocialMedia;