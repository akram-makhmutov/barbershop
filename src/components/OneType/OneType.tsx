import styles from "./OneType.module.scss"
import More from "../More/More.tsx"

interface Props {
    image: string;
    list: {name: string}[];
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
            <More/>
        </div>
    );
}

export default OneType;