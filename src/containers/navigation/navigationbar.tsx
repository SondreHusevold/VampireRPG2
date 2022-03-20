import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css'

function isActivated(link: { isActive: boolean }) {
    if(link.isActive) {
        return "activeLink";
    }
    return "";
}

function NavigationBar() {
    return (
        <nav className={styles.navbar}>
            <NavLink className={(navData) => isActivated(navData)} to="/">Home</NavLink>
            <NavLink className={(navData) => isActivated(navData)} to="/information">Information</NavLink>
            <NavLink className={(navData) => isActivated(navData)} to="/clans">Clans</NavLink>
            <NavLink className={(navData) => isActivated(navData)} to="/attributes">Attributes</NavLink>
            <NavLink className={(navData) => isActivated(navData)} to="/abilities">Abilities</NavLink>
            <NavLink className={(navData) => isActivated(navData)} to="/disciplines">Disciplines</NavLink>
            <NavLink className={(navData) => isActivated(navData)} to="/rules">Rules</NavLink>
            <a target={`_blank`} href="/CharacterSheet.pdf">Sheets</a>
        </nav>
    )
}

export default NavigationBar;