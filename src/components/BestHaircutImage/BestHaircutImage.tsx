import {useEffect, useRef, useState} from "react";
import styles from './BestHaircutImage.module.scss';
import close from '../../../global/assets/images/close_2.svg';

interface Props {
    masterImage: string;
}

const BestHaircutImage = ({masterImage}: Props) => {
    const [modal, setModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const switchModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setModal(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div>
            <div className={styles.masterImage}>
                <img src={masterImage} onClick={switchModal}/>
            </div>
            {modal && (
                <div className={styles.modal} onClick={switchModal} ref={modalRef}>
                    <div className={styles.master}><img className={styles.modalContent} src={masterImage}/></div>
                    <div className={styles.closeModal} onClick={switchModal}>
                        <img src={close}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BestHaircutImage;