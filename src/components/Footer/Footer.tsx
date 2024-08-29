import styles from './Footer.module.scss';
import Field from '../Field/Field.tsx';
import Submit from '../Submit/Submit.tsx';
import footer from '../../../global/assets/images/footer.svg';
import React, {useRef} from "react";

const Footer = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLInputElement | null>(null);

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
        <div className={styles.footerContainer} style={{backgroundColor: '#292D33'}}>
            <img src={footer}/>
            <form className={styles.contactContainer} onSubmit={handleSubmit} >
                <div className={styles.contactText}>Contact Us!</div>
                <Field ref={nameRef} fontSize={"24px"} text="Enter your name"/>
                <Field ref={emailRef} fontSize={"24px"} text="Enter a valid email address"/>
                <Field ref={messageRef} fontSize={"24px"} text="Enter your message"/>
                <Submit/>
            </form>
        </div>
    );
}

export default Footer;
