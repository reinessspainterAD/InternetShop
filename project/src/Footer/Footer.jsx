import React from 'react';
import styles from "./Footer.module.css";
import Information from "./Information/Information.jsx";
import MyAccount from "./MyAccount/MyAccount.jsx";
import ContactInfo from "./ContactInfo/ContactInfo.jsx";
import SocialMedia from "./SocialMedia/SocialMedia.jsx";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Information />
            <MyAccount />
            <ContactInfo />
            <SocialMedia />
            <img className={styles.Image} src='./img/logoneon.svg' alt='logo'/>

        </footer>
    );
};

export default Footer;
