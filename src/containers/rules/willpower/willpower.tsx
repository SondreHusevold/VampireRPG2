function Willpower() {
    return (
        <div className={`fadeIn`}>
            <h2>Willpower</h2>
            <p>Willpower is one of the most active and important Traits in Vampire. 
                Because there are so many ways to expend, regain, and use Willpower, it fluctuates more than any other Trait (besides blood pool) in the game.
            </p>
            <p>Willpower is a very versatile Trait, so make sure you understand how to use it.</p>
            <h3>Automatic Success</h3>
            <p>
                A player may spend one of her character's Willpower points to gain an automatic success on a single action. 
                Only one point of Willpower may be used in a single turn in this manner, but the success is guaranteed and may not be canceled, even by botches. 
                By using Willpower in this way, it is possible to succeed at a given action simply by concentrating. 
            </p>
            <p>For extended rolls, these extra successes may make the critical difference between accomplishment and failure.</p>
            <p>
                Note: You must declare that you are spending a Willpower point before you make an actual roll for a character's action; 
                you can't retroactively cancel a botch by spending a Willpower point at the last minute. Also, the Storyteller may declare that a Willpower
                point may not be spent on a given action (such as attacking in combat).
            </p>
            <h3>Reactive Maneuver</h3>
            <p>
                Sometimes, the Storyteller may rule that a character automatically takes some action based on instinct or urge — 
                for example, stepping back from a chasm or leaping away from a patch of sunlight filtering through a window. 
                The Storyteller may allow a player to spend a Willpower point and avoid taking this reactive maneuver.    
            </p>
            <p>
                It should be noted that the impulse may return at the Storyteller's discretion; 
                a player may need to spend multiple Willpower points over the course of a few turns to stay on task.
            </p>
            <p>
                Sometimes the urge may be overcome by the force of the character's will;  at other times, the character has no choice but to follow his instinct 
                (i.e., the character runs out of Willpower points or no longer wishes to expend them).
            </p>
            <h3>Prevent derangements</h3>
            <p>
                A Willpower point may be spent to prevent a derangement from manifesting, with the Storyteller's permission. 
                Eventually, if enough Willpower points are spent (as determined by the Storyteller), the derangement may be overcome and eliminated, as enough
                denial of the derangement remedies the aberration.
            </p>
            <p>
                Malkavians may never overcome their initial derangement, though Willpower may be spent to deny it for a short period of time.
            </p>
            <h3>Ignore wounds</h3>
            <p>
                By spending a Willpower point, wound penalties can be ignored for one turn. This allows a character to override pain and injury in order to take one last-ditch action. 
            </p>
            <p>However, an incapacitated or torpored character may not spend Willpower in this manner.</p>
        </div>
    )
}

export default Willpower;