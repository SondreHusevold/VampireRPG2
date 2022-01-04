import { Link } from 'react-router-dom';
import styles from './navigation.module.css'

function NavigationBar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/information">Information</Link>
            <Link to="/clans">Clans</Link>
            <Link to="/attributes">Attributes</Link>
            <Link to="/">Abilities</Link>
            <Link to="/">Disciplines</Link>
            <Link to="/">Combat</Link>
            <Link to="/">Sheets</Link>
        </nav>
    )
}

export default NavigationBar;