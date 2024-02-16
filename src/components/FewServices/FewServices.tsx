import styles from './FewServices.module.scss'
import OneService from "../OneService/OneService"
import {service_data} from "../OneService/servicedata.tsx"

const FewServices = () => {
    const service_1 = service_data[0];
    const service_2 = service_data[1];
    const service_3 = service_data[2];
    const service_4 = service_data[3];
    const imageScissors = '../../../global/assets/images/scissors.svg';
    const imageBeard = '../../../global/assets/images/beard.svg';
    const imageShaver = '../../../global/assets/images/shaver.svg';
    const imageWoman = '../../../global/assets/images/woman.svg';
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