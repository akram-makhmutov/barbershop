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
            {list && list.map((item, index) => (
                <div key={index} className={styles.oneType}>
                    <div className={styles.oneTypeText}>{item.name}</div>
                </div>
            ))}
            {list && list.map((item, index) => (
                <div key={index} className={styles.oneType}>
                    <More text={item.text} list={list}/>
                </div>
            ))}
        </div>
    );
}

export default OneType;