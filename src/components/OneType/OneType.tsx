import React, {useState} from 'react';
import styles from "./OneType.module.scss"
import More from "../More/More.tsx"

interface Props {
    image: string;
    list: { name: string }[];
}

const OneType = ({image, list}: Props) => {
    const [showMoreText, setShowMoreText] = useState(false);
    const toggleMoreText = () => {
        setShowMoreText(!showMoreText);

        return (
            <div>
                <img src={image} alt="image"/>
                {list && list.map((item, index) => (
                    <div key={index} className={styles.oneType}>
                        <div className={styles.oneTypeText}>{item.name}</div>
                    </div>
                ))}
                {showMoreText && <div className={styles.moreText}>Тут ваш скрытый текст</div>}
                <button onClick={toggleMoreText} className={styles.moreButton}>More</button>
                <More/>
            </div>
        );
    }

    export default OneType;