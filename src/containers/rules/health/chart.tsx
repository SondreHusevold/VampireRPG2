import React from 'react';
import styles from './health.module.css';
import cardStyles from '../../common/card.module.css';
import { healthLevels } from './healthLevels';


function HealthChart() {
    return (
        <div className={`fadeIn`}>
            <h2>Health chart</h2>
            <p>The health chart on the character sheet helps you track your character's current physical condition.</p>
            <p>
                It also lists the penalty imposed on your dice pool for each level of injury that your character sustains. 
                As your character suffers more injuries, her health declines until she becomes incapacitated or dies.
            </p>
            <div className={`${cardStyles.cardGrid} ${styles.healthCardGrid}`}>
                {
                    healthLevels.map(x => {
                        return (
                            <div className={`${cardStyles.card} ${styles.healthCard}`}>
                                <h3>{x.level}</h3>
                                {
                                    x.penalty &&
                                    <div>
                                        <label>Dice Pool Penalty:</label>
                                        <p>{x.penalty}</p>
                                    </div>
                                }
                                {
                                    x.movement &&
                                    <div>
                                        <label>Movement Penalty:</label>
                                        <p>{x.movement}</p>
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

export default HealthChart;