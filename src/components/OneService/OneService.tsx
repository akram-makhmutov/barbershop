import styles from "./OneService.module.scss"
import More from "../More/More.tsx"
import scissors from '../../../global/assets/images/scissors.svg'
import beard from '../../../global/assets/images/beard.svg'
import shaver from '../../../global/assets/images/shaver.svg'
import woman from '../../../global/assets/images/woman.svg'

interface Props {
    image: string;
    list: { id: number, name: string }[];
}

const OneService = ({image, list}: Props) => {
    return (
        <div>
            <img src={image} alt="image"/>
            {list && list.map((item, index) => (
                <div key={index} className={styles.oneService}>
                    <div className={styles.text}>{item.name}</div>

                </div>
            ))}
            <More/>
        </div>
    );
}

export default OneService;