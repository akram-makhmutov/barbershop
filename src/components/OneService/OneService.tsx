import styles from './OneService.module.scss'

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
                    <div className={styles.serviceText}>{item.name}</div>
                </div>
            ))}
        </div>
    );
}

export default OneService;