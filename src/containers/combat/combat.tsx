import { Link } from 'react-router-dom';
import styles from './combat.module.css';

function Combat() {
    return (
        <>
            <h1>Combat</h1>
            <div className={styles.combatGrid}>
                <Link to="stages">
                    <h1 className='nf nf-fa-sort_numeric_asc'/>
                    <h4>Combat Stages</h4>
                </Link>
                <Link to="types">
                    <h1 className={`nf nf-mdi-dice_d10`}/>
                    <h4>Combat {'&'} damage types</h4>
                </Link>
                <Link to="health">
                    <h1 className='nf nf-mdi-heart_half_full'/>
                    <h4>Health</h4>
                </Link>
                <Link to="maneuvers">
                    <h1 className='nf nf-mdi-karate'/>
                    <h4>Maneuvers</h4>
                </Link>
                <Link to="statuses">
                    <h1 className='nf nf-fa-low_vision'/>
                    <h4>Status Effects</h4>
                </Link>
                <Link to="equipment">
                    <h1 className={`nf nf-fae-shirt`}/>
                    <h4>Equipment Charts</h4>
                </Link>
            </div>
        </>
    )
}

export default Combat;