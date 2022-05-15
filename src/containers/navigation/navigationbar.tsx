import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css'

function isActivated(link: { isActive: boolean }) {
    if(link.isActive) {
        return "activeLink";
    }
    return "";
}

interface NavigationProps {
    showMobileMenu: boolean;
    setShowMobileMenu: (bool: boolean) => void;
}

function NavigationBar(props: NavigationProps) {
    if(!props.showMobileMenu && window.screen.width < 1300) {
        return (
            <div>
                <button className={`nf nf-mdi-menu ${styles.hamburgerMenu}`} onClick={() => props.setShowMobileMenu(true)}/>
            </div>
        )
    }

    return (
        <nav className={styles.navbar}>
            <button className={`nf nf-mdi-menu_up ${styles.closeButton}`} onClick={() => props.setShowMobileMenu(false)}/>
            <div className={styles.links}>
                <NavLink className={(navData) => isActivated(navData)} to="/">Home</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/information">Information</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/clans">Clans</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/attributes">Attributes</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/abilities">Abilities</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/disciplines">Disciplines</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/rules">Rules</NavLink>
                <a target={`_blank`} href="/CharacterSheet.pdf">Sheets</a>
            </div>
        </nav>
    )
}

export default NavigationBar;