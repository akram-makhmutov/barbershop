import styles from './More.module.scss';
import {useState, useEffect} from 'react';

interface Props {
    text: string;
}

const More = ({text}: Props) => {
    const [showText, setShowText] = useState(false);
    const [textHeight, setTextHeight] = useState(0);
    const toggleMoreText = () => {
        setShowText(!showText);
    };

    useEffect(() => {
        const element = document.getElementById('hiddenText');
        if (element) {
            if (showText) {
                setTextHeight(element.scrollHeight);
            } else {
                setTextHeight(0);
            }
        }
    }, [showText]);

    return (
        <div>
            <div
                id="hiddenText"
                className={`${styles.hiddenText} ${showText ? styles.hiddenTextVisible : ''}`}
                style={{height: textHeight}}>{text}
            </div>
            <div onClick={toggleMoreText} className={styles.buttonMore}>MORE</div>
        </div>
    );
}

export default More;
