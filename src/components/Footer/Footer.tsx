import styles from './Footer.module.scss'
import footer from '../../../global/assets/images/footer.svg'
import Field from '../Field/Field.tsx'

const Footer = () => {
    return (
        <div className={styles.FooterContainer} style={{backgroundColor: '#292D33'}}>
            <div className={styles.contactContainer}>
                <img src={footer} alt="footer"/>
                <div className={styles.contactText}>Contact Us!</div>
                <Field height={66} text="Enter your name"/>
                <Field height={66} text="Enter a valid email address"/>
                <Field height={210} text="Enter your message"/>
            </div>
        </div>
    )
        ;
}

export default Footer;
