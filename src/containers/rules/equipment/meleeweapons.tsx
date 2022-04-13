import { meleeweapons } from '../../../services/equipment_data/meleeweapons';
import cardStyle from '../../common/card.module.css';
import styles from './equipment.module.css';

function MeleeWeapons() {
    return (
        <div className={`fadeIn ${styles.meleeWeapons}`}>
            <h2>Melee Weapons</h2>
            <div className={cardStyle.cardGrid}>
                {meleeweapons.map(x => {
                    return (
                        <div className={`${cardStyle.card} ${styles.meleeCard}`}>
                            <h3>{x.name}</h3>
                            <div>
                                <label>Damage:</label>
                                <p>{x.damage}</p>
                            </div>
                            <div>
                                <label>Type:</label>
                                <p>{x.damageType}</p>
                            </div>
                            <div>
                                <label>Conceal:</label>
                                <p>{x.conceal}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p>Note: Stakes may paralyze a vampire if driven through the heart. The attacker must target the heart (difficulty 9) and score minimum three damage successes.</p>
        </div>
    )
}

export default MeleeWeapons;