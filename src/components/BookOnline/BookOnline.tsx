import styles from "./BookOnline.module.scss";
import {useState} from "react";
import Field from "../Field/Field.tsx";
import Submit from "../Submit/Submit.tsx";

const BookOnline = () => {

    const [modal, setModal] = useState(false);

    const switchModal = () => {
        setModal(!modal);
    }

    // Управление классом body в зависимости от состояния модального окна
    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <div>
            <div className={styles.buttonBookOnline} onClick={switchModal}>Book Online</div>
            {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay} onClick={switchModal}></div>
                    <div className={styles.modalContent}>
                        <button className={styles.closeModal} onClick={switchModal}>X</button>
                        <div className={styles.text}>Contact Us!</div>
                        <Field height={66} text="Enter your name"/>
                        <Field height={66} text="Enter a valid email address"/>
                        <Field height={210} text="Enter your message"/>
                        <Submit/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookOnline;