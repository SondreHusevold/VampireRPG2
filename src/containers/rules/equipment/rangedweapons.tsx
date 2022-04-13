import { rangedweapons } from '../../../services/equipment_data/rangedweapons';
import cardStyle from '../../common/card.module.css';
import styles from './equipment.module.css';

function RangedWeapons() {
    return (
        <div className={`fadeIn ${styles.rangedWeapons}`}>
            <h2>Ranged Weapons</h2>
            <div className={cardStyle.cardGrid}>
                {rangedweapons.map(x => {
                    return (
                        <div className={`${cardStyle.card} ${styles.rangedCard}`}>
                            <h3>{x.name}</h3>
                            <div>
                                <label>Damage:</label>
                                <p>{x.damage}</p>
                            </div>
                            <div>
                                <label>Range:</label>
                                <p>{x.range}</p>
                            </div>
                            <div>
                                <label>Rate:</label>
                                <p>{x.rate}</p>
                            </div>
                            <div>
                                <label>Capacity:</label>
                                <p>{x.capacity}</p>
                            </div>
                            <div>
                                <label>Automatic:</label>
                                <p>{x.bursts ? "Yes" : "No"}</p>
                            </div>
                            <div>
                                <label>Conceal:</label>
                                <p>{x.conceal}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p>
                The crossbow is included for characters who wish to try staking an opponent. Crossbows require five turns to reload. 
                Unless the crossbow is aimed at the head or heart, it inflicts bashing damage on Kindred. It inflicts lethal damage versus mortals.
            </p>
            <div>
                <h2>Ranged Weapon Attributes</h2>
                <h4>Damage</h4>
                <p>Indicates the damage dice pool. For mortals firearms is lethal damage. Firearms are bashing damage to vampires unless the head is targeted. </p>
                <h4>Range</h4>
                <p>This is the practical shot range in yards or meters. Weapons may be fired at twice this distance, but the attacks are considered long range (difficulty 8). </p>
                <h4>Rate</h4>
                <p>The maximum number of bullets or three-round bursts the gun can fire in a single turn. This rate does not apply to full-auto or spray attacks. </p>
                <h4>Capacity</h4>
                <p>The number of shells a gun can hold. The +1 indicates a bullet can be held in the chamber, ready to fire. </p>
            </div>
        </div>
    )
}

export default RangedWeapons;