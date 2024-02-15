import styles from "./OneService.module.scss"
import {service_data} from "./servicedata"
import More from "../More/More.tsx"

interface Props {
    service_data: service_data[];
}

const OneService = ({service_data}: Props) => {
    const service_1 = service_data[0];
    return (
        <div className={styles.oneService}>
            <img src={} alt="scissors"/>
            <div className={styles.text}>service_1</div>
            <More/>
        </div>
    )
}

export default OneService;