import styles from './Gallery.module.scss';
import footer from '../../../global/assets/images/footer.svg';
import Field from '../Field/Field.tsx';
import Submit from '../Submit/Submit.tsx';
import React from 'react';

const Gallery = () => {
    return (
        <div className={styles.GalleryContainer} style={{backgroundColor: '#292D33'}}>
            <img src={footer} alt="footer"/>
            <div className={styles.GalleryContactContainer}>
                <div className={styles.GalleryText}>Contact Us!</div>
                <Field height={66} text="Enter your name"/>
                <Field height={66} text="Enter a valid email address"/>
                <Field height={210} text="Enter your message"/>
                <Submit/>
            </div>
        </div>
    )
        ;
}

export default Gallery;