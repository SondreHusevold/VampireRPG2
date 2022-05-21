import { NavLink } from 'react-router-dom';
import GoBackTo from './backButtonRoutes';
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
            <div className={`${styles.hamburgerMenu}`}>
                <GoBackTo/>
                <button className={`nf nf-mdi-menu ${styles.burgerMenu}`} onClick={() => props.setShowMobileMenu(true)}/>
            </div>
        )
    }

    return (
        <nav className={styles.navbar}>
            <button className={`nf nf-mdi-menu_up ${styles.closeButton}`} onClick={() => props.setShowMobileMenu(false)}/>
            <div className={styles.links}>
                <NavLink className={(navData) => isActivated(navData)} to="/" onClick={() => props.setShowMobileMenu(false)}>Home</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/information" onClick={() => props.setShowMobileMenu(false)}>Information</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/clans" onClick={() => props.setShowMobileMenu(false)}>Clans</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/attributes" onClick={() => props.setShowMobileMenu(false)}>Attributes</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/abilities" onClick={() => props.setShowMobileMenu(false)}>Abilities</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/disciplines" onClick={() => props.setShowMobileMenu(false)}>Disciplines</NavLink>
                <NavLink className={(navData) => isActivated(navData)} to="/rules" onClick={() => props.setShowMobileMenu(false)}>Rules</NavLink>
                <a target={`_blank`} href="/CharacterSheet.pdf">Sheets</a>
            </div>
        </nav>
    )
}

export default NavigationBar;