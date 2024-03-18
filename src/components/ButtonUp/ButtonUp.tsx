import React, { useState, useEffect } from 'react';
import styles from './ButtonUp.module.scss';
import arrow_up from '../../../global/assets/images/arrow_up.svg';

const ButtonUp = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Проверяем, насколько прокручена страница
            const isScrolled = window.scrollY > 0;
            // Показываем или скрываем кнопку в зависимости от того, прокручена страница или нет
            setVisible(isScrolled);
        };

        // Добавляем обработчик события прокрутки при монтировании компонента
        window.addEventListener('scroll', handleScroll);

        // Убираем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        // Прокручиваем страницу вверх с плавной анимацией
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        visible && (
            <div className={styles.backToTopButton} onClick={scrollToTop}>
                <img src={arrow_up} alt="arrow up" />
            </div>
        )
    );
};

export default ButtonUp;
