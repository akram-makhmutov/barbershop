import React from "react"
import styles from "./OneService.module.scss"
import {service_data} from "./servicedata"
import More from "../More/More.tsx"

interface Props {
    image: string;
    service_data: service_data[];
}

const OneService: React.FC<Props> = ({image, list}: Props) => {
    const img = '../../../global/assets/images/scissors.svg';
    const service = service_data[0];
    return (
        <div>
            <img src={image} alt="image"/>
            {list && list.map((item, index) => (
                <div key={index} className={styles.oneService}>
                    <div className={styles.text}>{item.name}</div>
                    <More/>
                </div>
            ))}
        </div>
    );
}
    export default OneService;