import { Link } from 'react-router-dom';
import { rangedcombatmaneuversdata } from '../../../../services/maneuvers_data/rangedcombatmaneuverdata';
import cardStyles from '../../../common/card.module.css';
import styles from './maneuvers.module.css';

function RangedCombatManeuvers() {
    return (
        <div className="fadeIn">
            <h2>Ranged Combat Maneuvers</h2>
            <p>See Core Rulebook (page 277 - 278) if you need further information on how these work. Below are all the maneuvers available for ranged weapons.</p>
            <p>
                Some of these maneuvers require a weapon that can do the action. For example a revolver cannot do automatic fire. 
                See the <Link to="/rules/equipment/ranged">ranged weapons chart</Link> for types of weapons that support the skills in question.
            </p>
            <div className={`${cardStyles.cardGrid} ${styles.rangedCombatGrid}`}>
                {
                    rangedcombatmaneuversdata.map(x => {
                        return (
                            <div className={`${cardStyles.card} ${styles.rangedManeuverCard}`}>
                                <h3>{x.maneuver}</h3>
                                {
                                    x.traits &&
                                    <div>
                                        <label>Traits:</label>
                                        <p>{x.traits}</p>
                                    </div>
                                }
                                {
                                    x.accuracy &&
                                    <div>
                                        <label>Accuracy:</label>
                                        <p>{x.accuracy}</p>
                                    </div>
                                }

                                {
                                    x.difficulty && 
                                    <div>
                                        <label>Difficulty:</label>
                                        <p>{x.difficulty}</p>
                                    </div>
                                }
                                {
                                    x.damage && <div>
                                        <label>Damage:</label>
                                        <p>{x.damage}</p>
                                    </div>
                                }
                                {
                                x.description && 
                                <div className={styles.maneuverSpan}>
                                    <label>Description:</label>
                                    {x.description}
                                </div>
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RangedCombatManeuvers;