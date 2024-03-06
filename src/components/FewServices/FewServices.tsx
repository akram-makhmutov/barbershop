import styles from './FewServices.module.scss';
import master from '../../../global/assets/images/master.svg';
import OneService from '../OneService/OneService';
import {service_data} from '../OneService/servicedata';
import haircut from '../../../global/assets/images/haircut.svg'
import shaver from '../../../global/assets/images/shaver.svg';
import trim from '../../../global/assets/images/trim.svg';
import kids from '../../../global/assets/images/kids.svg';

const FewServices = () => {
    const service_1 = service_data[0];
    const service_2 = service_data[1];
    const service_3 = service_data[2];
    const service_4 = service_data[3];
    return (
        <div className={styles.barbershopBlock} style={{backgroundColor: '#292D33'}}>
            <div className={styles.barbershopData}>
                <div className={styles.barbershopName}>Barbershop Services</div>
                <div className={styles.barbershopServices}><img src={master} alt="master"/></div>
                <div className={styles.barbershopServicesData}>
                    <OneService image={haircut} list={[service_1]}/>
                    <OneService image={shaver} list={[service_2]}/>
                </div>
                <div className={styles.barbershopServicesData}>
                    <OneService image={trim} list={[service_3]}/>
                    <OneService image={kids} list={[service_4]}/>
                </div>
            </div>
        </div>
    );
}

export default FewServices;