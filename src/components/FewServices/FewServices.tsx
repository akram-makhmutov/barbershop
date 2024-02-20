import styles from './FewServices.module.scss'
import OneService from "../OneService/OneService"
import {service_data} from "../OneService/servicedata.tsx"
import scissors from '../../../global/assets/images/scissors.svg'
import beard from '../../../global/assets/images/beard.svg'
import shaver from '../../../global/assets/images/shaver.svg'
import woman from '../../../global/assets/images/woman.svg'

const FewServices = () => {
    const service_1 = service_data[0];
    const service_2 = service_data[1];
    const service_3 = service_data[2];
    const service_4 = service_data[3];
    return (
        <div className={styles.fewServices}>
            <OneService image={scissors} list={[service_1]} />
            <OneService image={beard} list={[service_2]} />
            <OneService image={shaver} list={[service_3]} />
            <OneService image={woman} list={[service_4]} />
        </div>
    );
}

export default FewServices;