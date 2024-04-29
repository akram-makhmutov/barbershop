import {useState} from "react";
import styles from './BookOnline.module.scss';


const BookOnline = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openForm = () => {
        setIsOpen(true);
        // document.body.classList.add('modalImageOpen');
    };

    
    const closeForm = () => {
        setIsOpen(false);
        // document.body.classList.remove('modalImageOpen');
    };

    return (
        <div>
            {isOpen && (
                <div className={styles.buttonBookOnline} onClick={openForm}>Book Online</div>
    )
}
</div>
)
    ;
}

export default BookOnline;