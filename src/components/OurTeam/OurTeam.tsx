import styles from './OurTeam.module.scss';
import OneTypeTeam from '../OneTypeTeam/OneTypeTeam.tsx';
import { type_data } from '../OneType/typedata.tsx';
import scissors from '../../../global/assets/images/scissors.svg';
import beard from '../../../global/assets/images/beard.svg';
import razor from '../../../global/assets/images/razor.svg';
import woman from '../../../global/assets/images/woman.svg';
import ButtonUp from "../ButtonUp/ButtonUp";

const OurTeam = () => {
    const type_1 = type_data[0];
    const type_2 = type_data[1];
    const type_3 = type_data[2];
    const type_4 = type_data[3];

    return (
        <div>
            <div className={styles.ourTeamFewTypes}>
                <OneTypeTeam image={scissors} list={[type_1]}/>
                <OneTypeTeam image={beard} list={[type_2]}/>
                <OneTypeTeam image={razor} list={[type_3]}/>
                <OneTypeTeam image={woman} list={[type_4]}/>
            </div>
            <ButtonUp/>
        </div>
    );
}

export default OurTeam;
