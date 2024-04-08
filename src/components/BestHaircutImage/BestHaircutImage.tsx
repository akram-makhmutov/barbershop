import {useState} from "react";
import styles from './BestHaircutImage.module.scss';
import close from '../../../global/assets/images/close.svg';

interface Props {
    masterImage: string;
}

const BestHaircutImage = ({masterImage}: Props) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className={styles.masterImage}>
                <img src={masterImage} onClick={openModal} alt="master"/>
            </div>
            {isOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <img className={styles.modalContent}
                         onClick={(e) => e.stopPropagation()}
                         src={masterImage} alt="master"/>
                    <img className={styles.close} src={close} alt="close"/>
                </div>
            )}
        </div>
    );
};

export default BestHaircutImage;