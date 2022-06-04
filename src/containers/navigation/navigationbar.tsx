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

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.hamburgerMenu} ${props.showMobileMenu ? styles.mobileNotShown : styles.forceShow}`}>
                <GoBackTo/>
                <button className={`nf nf-mdi-menu ${styles.burgerMenu}`} onClick={() => props.setShowMobileMenu(true)}/>
            </div>
            <button className={`nf nf-mdi-menu_up ${styles.closeButton} ${props.showMobileMenu ? styles.forceShow : styles.mobileNotShown}`} 
                onClick={() => props.setShowMobileMenu(false)}
            />
            <div className={`${styles.links} ${props.showMobileMenu ? styles.forceShow : styles.mobileNotShown}`}>
                <NavLink className={(navData) => isActivated(navData) + ` navLink`} to="/" onClick={() => props.setShowMobileMenu(false)}>Home</NavLink>
                <NavLink className={(navData) => isActivated(navData) + ` navLink`} to="/information" onClick={() => props.setShowMobileMenu(false)}>Information</NavLink>
                <NavLink className={(navData) => isActivated(navData) + ` navLink`} to="/clans" onClick={() => props.setShowMobileMenu(false)}>Clans</NavLink>
                <NavLink className={(navData) => isActivated(navData) + ` navLink`} to="/attributes" onClick={() => props.setShowMobileMenu(false)}>Attributes</NavLink>
                <NavLink className={(navData) => isActivated(navData) + ` navLink`} to="/abilities" onClick={() => props.setShowMobileMenu(false)}>Abilities</NavLink>
                <NavLink className={(navData) => isActivated(navData) + ` navLink`} to="/disciplines" onClick={() => props.setShowMobileMenu(false)}>Disciplines</NavLink>
                <NavLink className={(navData) => isActivated(navData) + ` navLink`} to="/rules" onClick={() => props.setShowMobileMenu(false)}>Rules</NavLink>
                <NavLink className={(navData) => isActivated(navData) + ` navLink`} to="/misc" onClick={() => props.setShowMobileMenu(false)}>Miscellaneous</NavLink>
            </div>
        </nav>
    )
}

export default NavigationBar;