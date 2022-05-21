function BloodBondResistance() {
    return (
        <div className={`fadeIn`}>
            <h2>Resistance</h2>
            <p>
                It is possible, though difficult, for a vampire to temporarily resist a blood bond. Doing so requires the player to make a Willpower roll (difficulty is typically 8, 
                though this can be modified depending on the regnant's treatment and the thrall's Nature) and accumulate a number of successes equal to the number of times the thrall 
                has partaken of the regnant's blood, to a maximum of difficulty 9. The thrall must then spend a Willpower point. 
            </p>
            <p>
                Upon doing so, the bond is negated for a variable amount of time: from one scene (if the thrall merely wishes to plot against the regnant, deliver confidential information 
                to an enemy, etc.) to one turn (if the thrall wishes to attack the regnant physically). The thrall can continue to expend Willpower to extend the duration of “freedom,” 
                but once she ceases doing so, the blood bond resumes at full force.
            </p>
        </div>
    )
}

export default BloodBondResistance;