import React from 'react';
import { closecombatmaneuverdata } from '../../../../services/maneuvers_data/closedcombatmaneuverdata';
import cardStyles from '../../../common/card.module.css';
import styles from './maneuvers.module.css';

function CloseCombatManeuvers() {
    return (
        <div className={`fadeIn`}>
            <h2>Close Combat Maneuvers</h2>
            <p>Check these out in the Core Rulebook (page 275 - 277) if they strike your fancy. Below are all the maneuvers available.</p>
            <p>If your character wants to do something not described below, ask the storyteller.</p>
            <div className={`${cardStyles.cardGrid} ${styles.closeCombatGrid}`}>
                {
                    closecombatmaneuverdata.map(x => {
                        return (
                            <div className={`${cardStyles.card} ${styles.maneuverCard}`}>
                                <h3>{x.maneuver}</h3>
                                <div>
                                    <label>Traits:</label>
                                    <p>{x.traits}</p>
                                </div>
                                <div>
                                    <label>Accuracy:</label>
                                    <p>{x.accuracy}</p>
                                </div>
                                <div>
                                    <label>Difficulty:</label>
                                    <p>{x.difficulty}</p>
                                </div>
                                <div>
                                    <label>Damage:</label>
                                    <p>{x.damage}</p>
                                </div>
                                {
                                x.feature != null && 
                                <div className={styles.maneuverSpan}>
                                    <label>Feature:</label>
                                    <p>{x.feature}</p>
                                </div>
                                }
                                 <div className={styles.maneuverSpan}>
                                    <label>Description:</label>
                                    {x.description}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CloseCombatManeuvers;