import { Link } from 'react-router-dom';
import { abilities } from '../../services/abilityService';
import styles from './abilities.module.css';

function Abilities() {
    return (
        <div className={`fadeIn ${styles.abilitiesGrid}`}>
            {
                abilities.map((section) => {
                    return (
                        <div>
                            <h2>{section.name}</h2>
                            <div className={styles.abilitiesColumn}>
                                {section.abilities.map((ability) => {
                                    return (
                                        <Link to={`${ability.name}`} className={styles.abilityButton}>
                                            <span className={`nf ${ability.icon}`}/> {ability.name}
                                        </Link>
                                    )     
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Abilities;