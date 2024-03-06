import styles from './FewPrices.module.scss';
import {price_data} from '../OnePrice/pricedata.tsx';
import OnePrice from '../OnePrice/OnePrice.tsx';

const FewPrices = () => {
    const price_1 = price_data[0];
    const price_2 = price_data[1];
    const price_3 = price_data[2];
    const price_4 = price_data[3];
    const price_5 = price_data[4];
    const price_6 = price_data[5];
    const price_7 = price_data[6];
    const price_8 = price_data[7];
    return (
        <div>
            <div className={styles.prices}>Our Pricing</div>
            <div className={styles.columnPrices}>
                <div className={styles.listPrices_1}>
                    <OnePrice list={[price_1]}/>
                    <OnePrice list={[price_2]}/>
                    <OnePrice list={[price_3]}/>
                    <OnePrice list={[price_4]}/>
                </div>
                <div className={styles.listPrices_2}>
                    <OnePrice list={[price_5]}/>
                    <OnePrice list={[price_6]}/>
                    <OnePrice list={[price_7]}/>
                    <OnePrice list={[price_8]}/>
                </div>
            </div>
        </div>
)
    ;
}

export default FewPrices;