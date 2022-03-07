import styles from './health.module.css';

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
                    <p>Bruised</p>
                    <p>0</p>
                    <p>Character is only bruised and suffers no dice pool penalties due to damage.</p>
                    <p>Hurt</p>
                    <p>-1</p>
                    <p>Character is superficially hurt and suffers no movement hindrance.</p>
                    <p>Injured</p>
                    <p>-1</p>
                    <p>Character suffers minor injuries and movement is mildly inhibited (halve maximum running speed).</p>
                    <p>Wounded</p>
                    <p>-2</p>
                    <p>Character suffers significant damage and may not run (though he may still walk). Character can only move or attack; he always loses dice when moving and attacking in the same turn.</p>
                    <p>Mauled</p>
                    <p>-2</p>
                    <p>Character is badly injured and may only hobble about (three meters per turn).</p>
                    <p>Crippled</p>
                    <p>-5</p>
                    <p>Character is catastrophically injured and may only crawl (one meter per turn).</p>
                    <p>Incapacitated</p>
                    <span/>
                    <p>Character is incapable of movement and is likely unconscious. Incapacitated vampires with no blood in their bodies enter torpor.</p>
                    <p>Torpor</p>
                    <span/>
                    <p>Character enters a deathlike trance. He may do nothing, not even spend blood, until a period of time has passed.</p>
                    <p>Final Death</p>
                    <span/>
                    <p>Character is killed permanently.</p>
                </div>
            </div>

        </div>
    )
}

export default HealthChart;