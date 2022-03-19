import { Link } from "react-router-dom";
import styles from './combatTypes.module.css';

function Armor() {
    return (
        <div className={styles.fadeInLoad}>
          	<h2>Armor</h2>
            <p>
                Armor adds to your character's soak (see combat stages). The armor's rating combines with your base soak for purposes of reducing damage. Armor restricts flexibility based on whether it is light or heavy.
            </p>
            <p>
                Armor protects against bashing, lethal, and aggravated damage from teeth and claws; it does not protect
                against fire or sunlight. Armor is not indestructible.
            </p>
            <p>
                If the damage rolled in a single attack equals twice the
                armor's rating, the armor is destroyed.
            </p>
            <p>
                To see different armor pieces, go to <Link to="/rules/equipment">Equipment</Link>.
            </p>
        </div>
    )
}

export default Armor;