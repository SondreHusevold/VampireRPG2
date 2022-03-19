import React from 'react';
import styles from './maneuvers.module.css';

const maneuvers = [
    {
        maneuver: "Automatic Fire", traits: "Dex + Firearms",
        accuracy: "+10", difficulty: "+2",
        damage: "Special"
    },
    {
        maneuver: "Multiple Shots", traits: "Dex + Firearms",
        accuracy: "Special", difficulty: "Normal",
        damage: "Weapon"
    },
    {
        maneuver: "Strafing", traits: "Dex + Firearms",
        accuracy: "+10", difficulty: "+2",
        damage: "Special"
    },
    {
        maneuver: "3-Round Burst", traits: "Dex + Firearms",
        accuracy: "+2", difficulty: "+1",
        damage: "Weapon"
    },
    {
        maneuver: "Two Weapons", traits: "Dex + Firearms",
        accuracy: "Normal", difficulty: "+1/Off-Hand",
        damage: "Weapon"
    }
]

function RangedCombatManeuvers() {
    return (
        <div className="fadeIn">
            <h2>Ranged Combat Maneuvers</h2>
            <p>See Core Rulebook (page 277 - 278) if you need further information on how these work. Below are all the maneuvers available for ranged weapons.</p>
            <p>
                Some of these maneuvers require a weapon that can do the action. For example a revolver cannot do automatic fire. 
                See the ranged weapons chart for types of weapons that support the skills in question.
            </p>
            <div className={styles.rangedCombatGrid}>
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
        </div>
    )
}

export default RangedCombatManeuvers;