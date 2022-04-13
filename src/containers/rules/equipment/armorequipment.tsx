import { Link } from 'react-router-dom';
import { armorEquipment } from '../../../services/equipment_data/armordata';
import cardStyle from '../../common/card.module.css';
import styles from './equipment.module.css';

function ArmorEquipment() {
    return (
        <div className={`fadeIn ${styles.armorEquipment}`}>
            <h2>Armor</h2>
            <p>For information on how armor works, see <Link to="/rules/combat/types/armor">Armor</Link> under Combat and Damage Types.</p>
            <div className={cardStyle.cardGrid}>
                {armorEquipment.map(x => {
                    return (
                        <div className={`${cardStyle.card} ${styles.armorCard}`}>
                            <h3>{x.class}</h3>
                            <div>
                                <label>Armor Rating:</label>
                                <p>{x.rating}</p>
                            </div>
                            <div>
                                <label>Penalty:</label>
                                <p>{x.penalty}</p>
                            </div>
                            <div>
                                <label>Example:</label>
                                <p>{x.example}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default ArmorEquipment;