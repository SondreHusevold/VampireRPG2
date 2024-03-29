import { NavLink } from "react-router-dom";
import styles from './common.module.css';

function NavigationLinker(props: { to: string, name: string }) {
    return (
        <NavLink to={props.to} className={
            ({ isActive }) => isActive ? `${styles.navigationActive} navLink` : `${styles.navigationInactive} navLink`
        }>{props.name}</NavLink>
    )
}

export default NavigationLinker;