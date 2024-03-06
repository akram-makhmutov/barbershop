import styles from './Header.module.scss';
import logo from '../../../global/assets/images/logo.svg';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>Our Team</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;