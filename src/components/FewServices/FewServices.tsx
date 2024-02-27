import styles from './FewServices.module.scss'
import master from "../../../global/assets/images/master.svg"

const FewServices = () => {
    return (
        <div className={styles.barbershopBlock} style={{backgroundColor: '#292D33'}}>
            <div className={styles.barbershopData}>
                <div className={styles.barbershopName}>Barbershop Services</div>
                <div className={styles.barbershopServices}><img src={master} alt="master"/></div>
            </div>
        </div>
    );
}

export default FewServices;