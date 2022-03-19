import React from 'react';
import styles from './health.module.css';
import { healthLevels } from './healthLevels';


function HealthChart() {
    return (
        <div className={styles.fadeInLoad}>
            <h2>Health chart</h2>
            <p>The health chart on the character sheet helps you track your character's current physical condition.</p>
            <p>
                It also lists the penalty imposed on your dice pool for each level of injury that your character sustains. 
                As your character suffers more injuries, her health declines until she becomes incapacitated or dies.
            </p>
            <div className={styles.chart}>
                <div className={styles.chartGrid}>
                    <span>Health Level</span>
                    <span>Dice Pool Penalty</span>
                    <span>Movement Penalty</span>
                    <span className={styles.gridHr} />
                    {
                        healthLevels.map((lvl) => {
                            return (
                                <React.Fragment>
                                    <p>{lvl.level}</p>
                                    <p>{lvl.penalty}</p>
                                    <p>{lvl.movement}</p>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default HealthChart;