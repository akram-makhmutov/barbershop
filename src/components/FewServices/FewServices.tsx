import styles from './FewServices.module.scss'
import OneService from "../OneService/OneService"
import {service_data} from "../OneService/servicedata.tsx"
import imageScissors from '../../../global/assets/images/scissors.svg'
import imageBeard from '../../../global/assets/images/beard.svg'
import imageShaver from '../../../global/assets/images/shaver.svg'
import imageWoman from '../../../global/assets/images/woman.svg'

const FewServices = () => {
    const service_1 = service_data[0];
    const service_2 = service_data[1];
    const service_3 = service_data[2];
    const service_4 = service_data[3];
    return (
        <div className={styles.fewServices}>
            <OneService image={imageScissors} list={[service_1]} />
            <OneService image={imageBeard} list={[service_2]} />
            <OneService image={imageShaver} list={[service_3]} />
            <OneService image={imageWoman} list={[service_4]} />
        </div>
    );
}

export default FewServices;