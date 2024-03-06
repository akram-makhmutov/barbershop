import styles from './More.module.scss';
import {useState} from 'react';

interface Props {
    list: { text: string }[];
}

const More = ({text}: Props) => {
    const [showText, setShowText] = useState(false);
    const toggleMoreText = () => {
        setShowText(!showText);
    };
    return (
        <div>
            {showText && <div className={styles.hiddenText}>{text}</div>}
            <div onClick={toggleMoreText} className={styles.buttonMore}>MORE</div>
        </div>
    );
}

export default More;