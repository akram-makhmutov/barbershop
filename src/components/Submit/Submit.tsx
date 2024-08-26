import styles from './Submit.module.scss';

const Submit = ({width}: { width?: number }) => {
    return (
        <button className={styles.submit} style={{width}}>Submit</button>
    );
}

export default Submit;