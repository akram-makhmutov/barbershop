import styles from './OnePrice.module.scss'

interface Props {
    list: { name: string, price: string }[];
}

const OnePrice = ({list}: Props) => {
    return (
        <div>
            {list && list.map((item, index) => (
                <div key={index} className={styles.onePrice}>
                    <div className={styles.namePrice}>{item.name}</div>
                    <div className={styles.valuePrice}>{item.price}</div>
                </div>
            ))}
            <div className={styles.linePrice}></div>
        </div>
    )
        ;
}

export default OnePrice;