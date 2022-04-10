import React from 'react';
import styles from './frenzy.module.css';

const allProvocations = [
    {
        provocation: "Smell of blood (when hungry)", difficulty: "3 (or higher in extreme cases)"
    },
    {
        provocation: "Sight of blood (when hungry)", difficulty: "4 (or higher in extreme cases)"
    },
    {
        provocation: "Being harassed", difficulty: "4"
    },
    {
        provocation: "Life-threatening situation", difficulty: "4"
    },
    {
        provocation: "Malicious taunts", difficulty: "4"
    },
    {
        provocation: "Physical provocation", difficulty: "6"
    },
    {
        provocation: "Taste of blood (when hungry)", difficulty: "6 (or higher in extreme cases)"
    },
    {
        provocation: "Loved one in danger", difficulty: "7"
    },
    {
        provocation: "Outright public humiliation", difficulty: "8"
    }
]

function Provocations() {
    return (
        <div className={`fadeIn ${styles.provocations}`}>
            <h2>Provocations</h2>
            <p>
                The Storyteller has final say in what can or cannot provoke a frenzy. 
                In some cases the Storyteller might completely ignore what the players feel should send their characters into a rage, and instead have some minor event cause a frenzy. 
                This is commonly done in situations where the Storyteller feels a frenzy can make a point about a character's personality, or enhance the events of a story. 
            </p>
            <p>The following list shows common stimuli that can incite a frenzy, and the typical difficulty for a character to resist.</p>
            <p>
                If the frenzy has the potential to cause the vampire to commit an atrocity (killing a child or other innocent, for example), the Storyteller can rule that
                the difficulty is 9 minus Conscience or Conviction instead.
            </p>
            <div className={styles.provocationGrid}>
                <p>Provocation</p>
                <p>Difficulty</p>

                {allProvocations.map(x => {
                    return (
                        <React.Fragment>
                            <span>{x.provocation}</span>
                            <span>{x.difficulty}</span>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default Provocations;