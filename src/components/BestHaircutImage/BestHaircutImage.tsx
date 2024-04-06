import styles from './BestHaircutImage.module.scss';
import {useState} from "react";

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
                <div className="modal">
                    <img className="modalContent" src={masterImage}/>
                    <span className="close" onClick={closeModal}>&times;</span>
                </div>
            )}
        </div>
    );
};

export default BestHaircutImage;