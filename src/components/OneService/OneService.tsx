import React from "react"
import styles from "./OneService.module.scss"
import {service_data} from "./servicedata"
import More from "../More/More.tsx"

interface Props {
    image: string;
    list: { id: number, name: string }[];
}

const OneService = ({image, list}: Props) => {
    return (
        <div>
            <img src={image} alt="image"/>
            {list && list.map((item, index) => (
                <div key={index} className={styles.oneService}>
                    <div className={styles.text}>{item.name}</div>

                </div>
            ))}
            <More/>
        </div>
    );
}

export default OneService;