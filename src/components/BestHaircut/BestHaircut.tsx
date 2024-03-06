import styles from './BestHaircut.module.scss';
import best_1 from '../../../global/assets/images/best_1.svg';
import best_2 from '../../../global/assets/images/best_2.svg';
import best_3 from '../../../global/assets/images/best_3.svg';
import best_4 from '../../../global/assets/images/best_4.svg';
import best_5 from '../../../global/assets/images/best_5.svg';
import best_6 from '../../../global/assets/images/best_6.svg';

const BestHaircut = () => {
    return (
        <div className={styles.bestHaircut} style={{backgroundColor: '#9D9570'}}>
            <div className={styles.bestHaircutText}>Experience the Best Haircut <br/> & Shave Services</div>
            <div className={styles.bestHaircutImages}>
                <img src={best_1} alt="best_1"/>
                <img src={best_2} alt="best_2"/>
                <img src={best_3} alt="best_3"/>
            </div>
            <div className={styles.bestHaircutImages}>
                <img src={best_4} alt="best_4"/>
                <img src={best_5} alt="best_5"/>
                <img src={best_6} alt="best_6"/>
            </div>
        </div>
    )
}

export default BestHaircut;
