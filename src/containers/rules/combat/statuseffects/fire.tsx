import { Link } from 'react-router-dom';
import columnStyles from '../../../common/columns.module.css';

function Fire() {
    return (
        <div className={`fadeIn`}>
            <h2>Fire</h2>
            <p>
                Vampires fear fire, for it is one of the few things that can end their immortal existences. Fire damage is aggravated and ignores armor; it may be soaked only with Fortitude. 
                A fire's size determines the levels of aggravated damage a character endures per turn, while its heat determines the difficulty of the Fortitude soak roll.
            </p>
            <p>Just the act of seeing fire might bring on <Link to="rules/frenzy/rotschreck">Rötschreck</Link></p>
            <p>
                A character suffers the full damage effect for each turn that she's in contact with the flames; she must leave the area and/or put out any fire on her to stop taking damage. 
                All damage inflicted by fire is automatically successful unless soaked (i.e., a character trapped in a bonfire takes two automatic health levels of damage per turn, 
                not the results of two damage dice per turn).
            </p>
            <p>
                If your character falls to Maimed, she is scarred temporarily by the flames (reduce Appearance by one until her wounds recover to Bruised). 
                If she is reduced to Crippled or Incapacitated by the fire, the burns cover the majority of her body, reducing Appearance by two.
            </p>
            <h3>Soak difficulties</h3>
            <div className={columnStyles.doubleColumn}>
                <label>Soak Difficulty</label>
                <label>Heat of Fire</label>
                <p>3</p>
                <p>Heat of a candle (first-degree burns)</p>
                <p>5</p>
                <p>Heat of a torch (second-degree burns)</p>
                <p>7</p>
                <p>Heat of a Bunsen burner (third-degree burns)</p>
                <p>8</p>
                <p>Heat of a electrical fire</p>
                <p>9</p>
                <p>Heat of a chemical fire</p>
                <p>10</p>
                <p>Molten metal</p>
            </div>

            <h3>Damage per turn</h3>
            <div className={columnStyles.doubleColumn}>
                <label>Health Levels/Turn</label>
                <label>Size of Fire</label>
                <p>One</p>
                <p>Torch; a part of the body is exposed to flame</p>
                <p>Two</p>
                <p>Bonfire; half of the body is exposed to flame</p>
                <p>Three</p>
                <p>Raging inferno; entire body is engulfed in flame</p>
            </div>
        </div>
    )
}

export default Fire;