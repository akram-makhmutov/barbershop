import styles from './Contacts.module.scss'
import geotag from '../../../global/assets/images/geotag.svg'
import phone from '../../../global/assets/images/phone.svg'

interface Props {
    list: { id: number, street: string, city: string, index: string, phone: string }[];
}

const Contacts = ({list}: Props) => {
    return (
        <div>
            {list.map((item, index_) => (
                <div key={index_} className={styles.contactsData}>
                    {item.id % 2 === 0 ? (
                        <div className={styles.contacts}>
                            <img src={geotag} alt="geotag"/>
                            {item.street}, {item.city}, {item.index}
                        </div>
                    ) : (
                        <div className={styles.contacts}>
                            <img src={phone} alt="phone"/>
                            {item.phone}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Contacts;