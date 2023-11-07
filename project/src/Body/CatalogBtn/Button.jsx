import React from 'react';
import styles from "./Button.module.css";

const Button = () => {
    return (
        <div className={styles.BtnWrapper}>
            <button type="button" className={styles.Btn}>
                <label className={styles.BtnLabel}>Каталог</label>
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="0" height="0" fill="#E5E5E5"/>
                    <g id="Frame 19" clip-path="url(#clip0_8_1890)">
                    <rect width="1440" height="4874" transform="translate(-700 -767)" fill="none"/>
                    <rect id="Rectangle 19" x="-700" y="-767" width="1440" height="4500" fill="none"/>
                    <g id="&#208;&#179;&#208;&#187;&#208;&#176;&#208;&#178;&#208;&#189;&#209;&#139;&#208;&#185; &#209;&#141;&#208;&#186;&#209;&#128;&#208;&#176;&#208;&#189;">
                    <g id="&#208;&#186;&#208;&#189;&#208;&#190;&#208;&#191;&#208;&#186;&#208;&#176;">
                    <circle id="Ellipse 1" cx="19.5" cy="-12.5" r="96"/>
                    <path id="Arrow 8" d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E"/>
                    </g>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_8_1890">
                    <rect width="1440" height="4874" fill="white" transform="translate(-700 -767)"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    );
};

export default Button;
