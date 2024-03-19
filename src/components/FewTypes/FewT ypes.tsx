import styles from './FewTypes.module.scss';
import OneType from '../OneType/OneType';
import {type_data} from '../OneType/typedata.tsx';
import scissors from '../../../global/assets/images/scissors.svg';
import beard from '../../../global/assets/images/beard.svg';
import razor from '../../../global/assets/images/razor.svg';
import woman from '../../../global/assets/images/woman.svg';
import ButtonUp from "../ButtonUp/ButtonUp";

const FewTypes = () => {
    const type_1 = type_data[0];
    const type_2 = type_data[1];
    const type_3 = type_data[2];
    const type_4 = type_data[3];
    return (
        <div>
            <div className={styles.fewTypes}>
                <OneType image={scissors} list={[type_1]}/>
                <OneType image={beard} list={[type_2]}/>
                <OneType image={razor} list={[type_3]}/>
                <OneType image={woman} list={[type_4]}/>
            </div>
            <ButtonUp/>
        </div>
    );
}

export default FewTypes;