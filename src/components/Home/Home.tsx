import styles from './Home.module.scss'
import {mine_data} from './minedata'
import man from '../../../global/assets/images/man.svg'
import Contacts from '../Contacts/Contacts.tsx'
import BookOnline from "../BookOnline/BookOnline";

interface Props {
    mine_data: mine_data[];
}

const Home = ({mine_data}: Props) => {
    const Contacts_1 = mine_data[0]
    const Contacts_2 = mine_data[1]
    const Contacts_3 = mine_data[2]
    const Contacts_4 = mine_data[3]
    return (
        <div>
            <div className={styles.homeContainer}>
                <div className={styles.leftBlock}>
                    <div className={styles.welcome}>
                        WELCOME TO
                    </div>
                    <div className={styles.barbershop}>
                        Barbershop in <br/> Manhattan!
                    </div>
                    <div className={styles.york}>
                        NEW YORK
                    </div>
                    <Contacts list={[Contacts_1]}/>
                    <Contacts list={[Contacts_2]}/>
                    <Contacts list={[Contacts_3]}/>
                    <Contacts list={[Contacts_4]}/>
                    <BookOnline/>
                </div>
                <img src={man} alt="man" className={styles.man}/>
            </div>
        </div>
    )
}

export default Home;
