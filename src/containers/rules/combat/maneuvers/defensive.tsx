import { defensivemaneuverdata } from '../../../../services/maneuvers_data/defensivemaneuverdata';
import cardStyles from '../../../common/card.module.css';
import styles from './maneuvers.module.css';

function DefensiveManeuvers() {
    return (
        <div className={`fadeIn`}>
            <h2>Defensive Maneuvers</h2>
            <p>
                Block, dodge, and parry can be performed as part of
                a multiple action in your character's turn (punching
                then blocking, shooting then dodging, parrying then
                striking). Using a multiple action to act and defend is
                advantageous because your character can still accomplish something in a turn besides avoiding attacks.
            </p>
            <p>
                Rather than having to divide your dice pool among
                multiple defensive actions, you may declare that your
                character spends an entire turn defending. The normal
                multiple-action rules are not used in this case.
            </p>
            <div className={`${cardStyles.cardGrid} ${styles.defensiveGrid}`}>
                {
                    defensivemaneuverdata.map(x => {
                        return (
                            <div className={`${cardStyles.card} ${styles.defensiveManeuverCard}`}>
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
                                <div className={styles.defensiveManeuverSpan}>
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

export default DefensiveManeuvers;