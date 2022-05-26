import { Link } from "react-router-dom";

function BloodPool() {
    return (
        <div className="fadeIn">
            <h2>Blood Pool</h2>
            <p>Vampires must subtract one blood point from their blood pools every night, whether they rise for the evening or not, as the unnatural magics animating their dead bodies consume the vitae they have taken from their prey. </p>
            <p>Blood points may also be spent in a variety of ways, and may be replenished only by consuming blood.</p>
            <p>
                Blood pool also affects Self-Control (or Instinct) rolls, which come into play when a character’s frenzy becomes imminent. 
                A player may never roll more dice for a Self-Control or Instinct roll than the character has blood pool.
            </p>
            <p>
                For example, if a character has only two blood points left, her player may roll only two dice for a Self-Control roll, 
                even if the character’s Self-Control rating is 4. Voracious vampires just don’t fight the Beast very well.
            </p>
            <p>The amount of blood points a vampire can use per turn is dependent on the vampire's Generation.</p>
            
            <h3>Rising</h3>
            <p>As previously mentioned, every vampire expends one blood point each night when she awakens, whether or not she actually goes out and about.</p>
            
            <h3>Healing</h3>
            <p>A vampire may spend one blood point to heal one normal (bashing or lethal) health level of damage.</p>
            <p>
                Characters must be resting and relatively inactive for this healing to take place, though this recovery is rapid: One blood point per turn may be spent to heal one health level, 
                though vampires of lower Generations may heal as many health levels per turn as they can spend blood points.
            </p>
            <p>See: <Link to="/rules/health/healing">Healing damage</Link> for more information on healing.</p>
            <p>
                Note that blood expenditure is the only way that vampires can heal wounds. Just as their immortality prevents the Kindred from aging and dying naturally, so it also inhibits the recuperative processes natural to a living body.
            </p>
            
            <h3>Blood Buff</h3>
            <p>
                A player may spend one blood point to increase a single Physical Attribute (Strength, Dexterity, Stamina) by one dot for the duration of the scene. 
                The player must announce at the beginning of the turn that he is doing this.
            </p>
            <p>
                A player may spend as many blood points on increasing Physical Attributes as the vampire may use in a turn (based upon Generation), but may only freely increase these Traits up to one higher than their Generational maximum
                (i.e., a Tenth-Generation vampire may increase Traits to a maximum of 6).
            </p>
            <p>
                With effort, a character may increase a Physical Attribute to above this limit, but each dot above the limit lasts for only three turns after the character stops spending blood.
            </p>
            <p>Note:  No character may increase Physical Attributes above 10.</p>

            <h3>Blush of Life</h3>
            <p>
                Though most vampires (with the exception of Nosferatu) appear much as they did in life, they still display certain corpselike features; 
                for example, their skin is unnaturally cold and grows more ashen with age, and they do not breathe.
            </p>
            <p>
                By spending a variable number of blood points, a vampire may will himself to appear more human for a scene: flushing his skin, drawing breath, even becoming capable of engaging in
                sexual intercourse (this last, while helpful in certain types of feeding, in no way means that the vampire may inseminate a mortal or become pregnant; a corpse is still a corpse, after all).
            </p>
            <p>
                Performing these actions for a scene requires an expenditure of blood points equal to (8 minus Humanity); thus, Kindred with Humanity ratings of 8 or higher may accomplish these feats automatically, 
                while vampires with low Humanity find the process exceedingly arduous.
            </p>

            <h3>Giving Blood</h3>
            <p>
                A vampire may give a number of blood points to another Kindred, thereby enabling the recipient to use the blood as if it were her own.
                This is often a grisly prospect, as the “donor” must open his own vein and physically deliver the blood to the needy Kindred.
            </p>
            <p>Of course, if a vampire is ever in a situation in which she needs blood, she’s likely all out of it herself, and may frenzy and take too much from the donor. </p>
            <p>
                If a vampire (or mortal) partakes of another Kindred’s blood three times, she becomes bound to that vampire through the mystical properties of vitae. 
                This is known as the <Link to="/rules/bloodbond/information">blood bond</Link>.
            </p>
            
            <h3>Ghouling</h3>
            <p>
                A vampire may gift a mortal or animal with a dose of his vitae, allowing the mortal in question to inject or ingest it. 
                For so long as the mortal retains the Kindred vitae in her system, she is considered a ghoul.
            </p>
            
            <h3>Disciplines</h3>
            <p>
            Blood may be spent to fuel certain vampiric Disciplines. Consult <Link  to="/disciplines">Disciplines</Link> to see which individual powers require blood expenditure.
            </p>
        </div>
    )
}

export default BloodPool;