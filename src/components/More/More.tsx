import styles from './More.module.scss';
import {useEffect, useRef, useState} from 'react';

interface Props {
    text: string;
}

const More = ({text}: Props) => {
    const [showText, setShowText] = useState(false);
    const [textHeight, setTextHeight] = useState(0);
    const textRef = useRef<HTMLDivElement>(null);

    const toggleMoreText = () => {
        setShowText(!showText);
    };

    useEffect(() => {
        if (textRef.current) {
            if (showText) {
                setTextHeight(textRef.current.scrollHeight);
            } else {
                setTextHeight(0);
            }
        }
    }, [showText]);

    return (
        <div>
            <div
                ref={textRef}
                className={`${styles.hiddenText} ${showText ? styles.hiddenTextVisible : ''}`}
                style={{height: textHeight}}>
                {text}
            </div>
            <div onClick={toggleMoreText} className={styles.buttonMore}>MORE</div>
        </div>
    );
}

export default More;