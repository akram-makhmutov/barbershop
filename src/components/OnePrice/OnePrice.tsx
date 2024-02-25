import styles from './OnePrice.module.scss'

interface Props {
    list: { name: string, price: string }[];
}

const OnePrice = ({list}: Props) => {
    return (
        <div className={styles.onePrice}>
            <div className={styles.namePrice}>

            </div>
            <div className={styles.valuePrice}>

            </div>
            <div className={styles.linePrice}></div>
        </div>
    );
}