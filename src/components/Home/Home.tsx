import styles from './Home.module.scss';
import {mine_data} from './minedata';
import man from '../../../global/assets/images/man.svg';
import Contacts from '../Contacts/Contacts.tsx';
import BookOnline from '../BookOnline/BookOnline';

interface Props {
    mine_data: mine_data[];
}

const Home = ({mine_data}: Props) => {
    const contacts_1 = mine_data[0];
    const contacts_2 = mine_data[1];
    const contacts_3 = mine_data[2];
    const contacts_4 = mine_data[3];
    return (
        <div>
            <div className={styles.homeContainer}>
                <div className={styles.leftBlock}>
                    <div className={styles.welcome}>
                        WELCOME TO
                    </div>
                    <div className={styles.barbershop}>
                        Barbershop in <br/> Manhattan
                    </div>
                    <div className={styles.york}>
                        NEW YORK
                    </div>
                    <Contacts list={[contacts_1]}/>
                    <Contacts list={[contacts_2]}/>
                    <Contacts list={[contacts_3]}/>
                    <Contacts list={[contacts_4]}/>
                    <BookOnline/>
                </div>
                <img src={man} alt="man" className={styles.man}/>
            </div>
        </div>
    );
}

export default Home;
