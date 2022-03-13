import React from 'react';
import styles from './maneuvers.module.css';

const maneuvers = [
    {
        maneuver: "Bite", traits: "Dex + Brawl",
        accuracy: "+1", difficulty: "Normal",
        damage: "Str + 1 (A)"
    },
    {
        maneuver: "Block", traits: "Dex + Brawl",
        accuracy: "Special", difficulty: "Normal",
        damage: "None (R)"
    },
    {
        maneuver: "Claw", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str +1 (A)"
    },
    {
        maneuver: "Clinch", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str (C)"
    },
    {
        maneuver: "Disarm", traits: "Dex + Melee",
        accuracy: "Normal", difficulty: "+1",
        damage: "Special"
    },
    {
        maneuver: "Dodge", traits: "Dex + Athletics",
        accuracy: "Special", difficulty: "Normal",
        damage: "None (R)"
    },
    {
        maneuver: "Hold", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "None (C)"
    },
    {
        maneuver: "Kick", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str +1"
    },
    {
        maneuver: "Parry", traits: "Dex + Melee",
        accuracy: "Special", difficulty: "Normal",
        damage: "None (R)"
    },
    {
        maneuver: "Strike", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str"
    },
    {
        maneuver: "Sweep", traits: "Dex + Brawl/Melee",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str (K)"
    },
    {
        maneuver: "Tackle", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str +1 (K)"
    },
    {
        maneuver: "Weapon Strike", traits: "Dex + Melee",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Weapon"
    }                                    
]

function CloseCombatManeuvers() {
    return (
        <div className="fadeIn">
            <h2>Close Combat Maneuvers</h2>
            <p>Check these out in the Core Rulebook (page 275 - 277) if they strike your fancy. Below are all the maneuvers available in a table with their stats.</p>
            <h3>Chart:</h3>
            <div className={styles.closeCombatGrid}>
                <p>Maneuver</p>
                <p>Traits</p>
                <p>Accuracy</p>
                <p>Difficulty</p>
                <p>Damage</p>

                {
                    maneuvers.map(x => {
                        return (
                            <React.Fragment>
                                <span>{x.maneuver}</span>
                                <span>{x.traits}</span>
                                <span>{x.accuracy}</span>
                                <span>{x.difficulty}</span>
                                <span>{x.damage}</span>
                            </React.Fragment>
                        )
                    })
                }
            </div>
            <div className={styles.closeCombatUnderGrid}>
                <span>
                    <b>(A):</b> The maneuver inflicts aggravated damage.
                </span>
                <span>
                    <b>(C):</b> The maneuver carries over on successive turns.
                </span>
                <span>
                    <b>(K):</b> The maneuver causes knockdown.
                </span>
                <span>
                    <b>(R):</b> The maneuver reduces an opponent's attack successes.
                </span>
            </div>
        </div>
    )
}

export default CloseCombatManeuvers;