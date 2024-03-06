import styles from './More.module.scss';
import {useState} from 'react';

interface Props {
    list: { name: string, text: string }[];
}

const More = ({list}: Props) => {
    const [showText, setShowText] = useState(false);
    const toggleMoreText = () => {
        setShowText(!showText);
    };
    return (
        <div>
            {list && list.map((item, index) => (
                showText && <div key={index} className={styles.hiddenText}>{item.text}</div>))}
            <div onClick={toggleMoreText} className={styles.buttonMore}>MORE</div>
        </div>
    );
}

export default More;