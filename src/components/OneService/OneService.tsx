import styles from './OneService.module.scss'

interface Props {
    image: string;
    list: { id: number, name: string }[];
}

const OneService = ({image, list}: Props) => {
    return (
        <div>
            {list && list.map((item, index) => (
                <div key={index} className={styles.oneService}><img src={image} alt="image"/>
                    <div className={styles.serviceText}>{item.name}</div>
                </div>
            ))}
        </div>
    );
}

export default OneService;