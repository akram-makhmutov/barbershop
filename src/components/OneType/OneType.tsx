import styles from './OneType.module.scss';
import More from '../More/More.tsx';

interface Props {
    image: string;
    list: { name: string, text: string }[];
}

const OneType = ({image, list}: Props) => {
    return (
        <div>
            <img src={image} alt="image"/>
            <div className={styles.oneType}>
                {list && list.map((item, index) => (
                    <div key={index} className={styles.moreText}>
                        <div className={styles.oneTypeText}>{item.name}</div>
                        <More text={item.text}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OneType;