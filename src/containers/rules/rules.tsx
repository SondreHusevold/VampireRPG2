/* eslint-disable jsx-a11y/heading-has-content */
import { Link } from 'react-router-dom';
import styles from './rules.module.css';

function Rules() {
    
    return (
        <div className={`fadeIn ${styles.rulesWrap}`}>
            <h2 className={`${styles.rulesHeader}`}>Rules</h2>
            <div className={`${styles.rulesGrid}`}>
                <Link to="combat/stages">
                    <h1 className='nf nf-fa-sort_numeric_asc'/>
                    <h4>Combat Stages</h4>
                </Link>
                <Link to="combat/types">
                    <h1 className={`nf nf-mdi-dice_d10`}/>
                    <h4>Combat {'&'} damage types</h4>
                </Link>
                <Link to="combat/maneuvers">
                    <h1 className='nf nf-mdi-karate'/>
                    <h4>Combat Maneuvers</h4>
                </Link>
                <Link to="health">
                    <h1 className='nf nf-mdi-heart_half_full'/>
                    <h4>Health</h4>
                </Link>

                <Link to="frenzy">
                    <h1 className={`nf nf-oct-flame`}/>
                    <h4>Frenzy</h4>
                </Link>
                <Link to="bloodbond">
                    <h1 className={`nf nf-fae-drop`}/>
                    <h4>Blood Bond</h4>
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
        </div>
    )
}

export default Rules;