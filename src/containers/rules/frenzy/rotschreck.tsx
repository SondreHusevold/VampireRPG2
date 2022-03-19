import { Link } from "react-router-dom";
import styles from './frenzy.module.css';

function Rotschreck() {
    return (
        <div className="fadeIn">
            <h2>Rötschreck: The Red Fear</h2>
            <p>
                Though there are few things that can kill a vampire and though many among the Damned claim to loathe their immortality certain sources of injury frighten all vampires. 
                Sunlight and fire can bring about a terrified flight-or-fight mentality.
            </p>
            <p>
                While under the spell of this Rötschreck, a vampire flees in blind panic from the source of her fear, frantically lashing out at anything in her way regardless 
                of any personal attachments or affiliations.
            </p>
            <p>
                Rötschreck is in most ways similar to any other <Link to="/rules/frenzy/system">frenzy</Link>; just as the Beast sometimes seizes control in times of anger, 
                so it does in times of great fear.
            </p>
            <p>
                Relatively innocuous stimuli, or stimuli directly under the character's control, are unlikely to induce Rötschreck. 
                For example, a character who sees a lit cigarette in a nightclub, or a screened-in fireplace in an ally's home, might grow uneasy, 
                but is unlikely to succumb to the Red Fear. If that same cigarette is pointed threateningly at the vampire, though, or the fireplace suddenly flares up…
            </p>
            <p>
                    A vampire seeking to avoid Rötschreck requires a Courage roll. As with frenzy, five successes must be accumulated to ignore the Beast completely, 
                    though fewer successes enable the vampire to overcome her fear for a greater or lesser period of time.
            </p>
            <p>
                Failure means the vampire flees madly from the danger, making a beeline for safety and tearing apart anything or anyone that gets in her way. 
                Any attempt to restrain a vampire suffering from Rötschreck results in an immediate attack, just as if the character were in frenzy.
            </p>
            <p>One Willpower point may be spent to maintain control for one turn.</p>
            <p>A character who is the victim of a botched Courage roll immediately frenzies and remains in a frenzy until the Storyteller decides otherwise.</p>
            
            <div className={styles.twoColumnSection}>
                <label>Provocation</label>
                <label>Difficulty</label>
                <p>Lighting a cigarette</p>
                <p>3</p>
                <p>Sight of a torch</p>
                <p>5</p>
                <p>Bonfire</p>
                <p>6</p>
                <p>Obscured sunlight</p>
                <p>7</p>
                <p>Being burned</p>
                <p>7</p>
                <p>Direct sunlight</p>
                <p>8</p>
                <p>Trapped in burning building</p>
                <p>9</p>
            </div>
        </div>
    )
}

export default Rotschreck;