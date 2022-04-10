import styles from './statusEffects.module.css';

function Electrocution() {
    return (
        <div className={`fadeIn`}>
            <h2>Electrocution</h2>
            <p>
            Vampires are not nearly so affected by simple electricity as are mortals. Nonetheless, electrocution might occasionally prove a danger. 
            The strength of the electrical flow determines the amount of lethal damage a character takes from electrocution. She suffers the damage effect noted below 
            each turn until contact with the source is severed (Strength roll to pull away; difficulty 5 for vampires, 9 for mortals). 
            </p>
            <p>
                Vampires may soak this damage normally, but, if a soak roll is botched, the damage is considered aggravated — the vampire's bloodstream and brain are fried.
            </p>
            <p>
                Electrical damage is a lethal effect, and armor doesn't protect against it (depending on the subject's defenses, the circumstance, and the Storyteller's decision).
            </p>
            <p>
                If your character falls to Maimed, she is scarred temporarily by the flames (reduce Appearance by one until her wounds recover to Bruised). 
                If she is reduced to Crippled or Incapacitated by the fire, the burns cover the majority of her body, reducing Appearance by two.
            </p>
            <div className={styles.twoColumnSection}>
                <label>Health Levels/Turn</label>
                <label>Electrical Source</label>
                <p>One</p>
                <p>Minor; Wall socket</p>
                <p>Two</p>
                <p>Major; Protective fence</p>
                <p>Three</p>
                <p>Severe; Vehicle battery, junction box</p>
                <p>Four</p>
                <p>Fatal; main feed line, subway rail</p>
            </div>
            <p>
            If a mortal character is subjected to significant amounts of electrical damage (that reduce her to Incapacitated), she may suffer permanent damage. 
            This can be physical impairment (reduced Physical Attributes), permanent memory loss, brain damage (reduced Mental Attributes), or disfigurement (reduced Appearance). 
            </p>
        </div>
    )
}

export default Electrocution;