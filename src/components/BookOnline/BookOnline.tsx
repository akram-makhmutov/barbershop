import styles from "./BookOnline.module.scss";
import {useEffect, useRef, useState} from "react";
import Field from "../Field/Field.tsx";
import Submit from "../Submit/Submit.tsx";
import close from "../../../global/assets/images/close.svg";

const BookOnline = () => {
    const [modal, setModal] = useState(false);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLInputElement | null>(null);

    const switchModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setModal(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const message = messageRef.current?.value;

        if (name && email && message) {
            alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div>
            <div className={styles.buttonBookOnline} onClick={switchModal}>
                Book Online
            </div>
            {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay} onClick={switchModal}></div>
                    <div className={styles.modalContent}>
                        <div className={styles.closeModal} onClick={switchModal}>
                            <img src={close} alt="close"/>
                        </div>
                        <div className={styles.text}>Contact Us!</div>
                        <form onSubmit={handleSubmit} className={styles.fields}>
                            <Field ref={nameRef} fontSize={"24px"} text="Enter your name"/>
                            <Field ref={emailRef} fontSize={"24px"} text="Enter a valid email address"/>
                            <Field ref={messageRef} fontSize={"24px"} text="Enter your message"/>
                            <div className={styles.submit}><Submit width={620}/></div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookOnline;