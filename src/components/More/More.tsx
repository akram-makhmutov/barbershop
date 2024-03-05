import styles from './More.module.scss'
import {useState} from "react";

interface Props {
    list: { text: string }[];
}

const More = ({text}: Props) => {
    const [showMoreText, setShowMoreText] = useState(false);
    const toggleMoreText = () => {
        setShowMoreText(!showMoreText);
    };
    return (
        <div>
            {showMoreText && <div className={styles.hiddenText}>{text}</div>}
            <div onClick={toggleMoreText} className={styles.buttonMore}>MORE</div>
        </div>
    );
}

export default More;