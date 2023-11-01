import React from 'react';
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
    return (
        <div className={styles.ContactInfo}>
            <label className={styles.ContactInfoLabel}>Контактная информация</label>
            <label className={styles.ContactInfoText}>
                <p>
                    ИП Вишневский Иван Сергеевич<br/>
                    государственная регистрация №690867884<br/>
                    от 31.07.2020.<br/> 
                    Логойским горисполкомом<br/>
                    Защита прав потребителей +375259990755
                </p>

            </label>
        </div>
    );
};

export default ContactInfo;