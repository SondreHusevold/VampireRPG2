import styles from './combatStages.module.css';

function Initiatives() {
    return (
        <div className={styles.fadeInLoad}>
            <h2>Initiative:</h2>
            <p>This stage organizes the turn and is when you declare your character's action.</p>
            <p>
                You must declare what your character does, you must also state if any multiple actions will be performed like dodging and attacking at the same time, 
                if Disciplines will be activated, if Willpower points will be spent, or if the character wants to delay the turn. 
            </p>
            <p>After declaring the action, you wait until the attack stage to implement that action.</p>
            <p>Everyone, player and Storyteller character alike, <b>rolls one die</b> and adds it to their initiative rating (<b>Dexterity + Wits</b>)</p>
            <p> Characters declare in <b>reverse</b> order of initiative, thus giving faster characters the opportunity to react to slower characters' actions.</p>
            <p>
                Finally, all additional actions that turn (including actions gained through Celerity) occur at the end of the turn. 
                If two or more characters take multiple actions, the actions occur in order of initiative rating. 
                An exception is made for defensive multiple actions, such as multiple dodges, which happen when they need to happen in order to avert attack.
            </p>
            <p>
                Remember that wound penalties subtract directly from a character's initiative rating, while Celerity dots that aren't being used 
                for extra actions add to it
            </p>
        </div>
    )
}

export default Initiatives;