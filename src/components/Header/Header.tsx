import styles from './Header.module.scss';
import logo from '../../../global/assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.menu}>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;