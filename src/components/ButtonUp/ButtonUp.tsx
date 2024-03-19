import {useState, useEffect} from 'react';
import styles from './ButtonUp.module.scss';
import arrow_up from '../../../global/assets/images/arrow_up.svg';

const ButtonUp = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setVisible(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <div className={`${styles.backToTopButton}
        ${visible ? styles.backToTopButtonVisible : styles.backToTopButtonHidden}`} onClick={scrollToTop}>
            <img src={arrow_up} alt="arrow up"/>
        </div>
    );
};

export default ButtonUp;