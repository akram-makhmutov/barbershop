import React from 'react';
import styles from './ButtonUp.module.scss';
import arrow_up from '../../../global/assets/images/arrow_up.svg';

const ButtonUp = () => {
    return (
        <div className={styles.backToTopButton} onClick={() => window.scrollTo(0, 0)}>
            <img src={arrow_up} alt="arrow up"/>
        </div>
    );
};

export default ButtonUp;