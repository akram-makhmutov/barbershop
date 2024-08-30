import styles from './OneType.module.scss';
import More from '../More/More.tsx';

interface Props {
    image: string;
    list: { name: string, text: string }[];
}

const OneType = ({image, list}: Props) => {
    return (
        <div>

            <div className={styles.oneType}>
                <img src={image}/>
                {list && list.map((item, index) => (
                    <div key={index} className={styles.oneTypeText}>{item.name}
                        <More text={item.text}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OneType;