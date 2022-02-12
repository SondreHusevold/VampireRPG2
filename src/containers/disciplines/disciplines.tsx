import styles from './disciplines.module.css';
import { disciplines } from '../../services/disciplineService';
import { Link } from 'react-router-dom';

function Disciplines() {
    return (
        <div className={styles.disciplines}>
            <h1>Disciplines</h1>
            <div className={styles.disciplinesGrid}>
                {
                    disciplines.map((disc) => {
                        return (
                            <Link to={`${disc.name}`} className={`${styles.disciplineButton}`}>
                                <span className={`vtm-icon`}>{disc.icon}</span>
                                <p>{disc.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Disciplines;