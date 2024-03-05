import styles from './More.module.scss'
import {useState} from "react";

const More = () => {
    const [showMoreText, setShowMoreText] = useState(false);
    const toggleMoreText = () => {
        setShowMoreText(!showMoreText);
    };
    return (
        <div>
            {showMoreText && <div className={styles.hiddenText}>Тут ваш скрытый текст</div>}
            <div onClick={toggleMoreText} className={styles.buttonMore}>MORE</div>
        </div>
    );
}

export default More;