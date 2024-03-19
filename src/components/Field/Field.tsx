import styles from './Field.module.scss';

const Field = ({height, text}: { height?: number, text: string }) => {
    return (
        <div className={styles.contactField}>
            <div className={styles.whiteSquare} style={{height: height || 66}}>
                <div className={styles.fieldText}>{text}</div>
            </div>
        </div>
    )
}

export default Field;