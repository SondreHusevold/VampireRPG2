import styles from './statusEffects.module.css';

function Derangements() {
    return (
        <div className={`fadeIn`}>
            <h2>Derangements</h2>
            <p>
                Derangements are behaviors that are created when the mind is forced to confront intolerable or conflicting feelings, such as overwhelming terror or profound guilt.
                When the mind is faced with impressions or emotions that it cannot reconcile, it attempts to ease the inner conflict by stimulating behavior such as megalomania,
                bulimia, or hysteria to provide an outlet for the tension and stress that the conflict generates.
            </p>
            <p>
                Vampires or mortals receive derangements under conditions of intense terror, guilt, or anxiety. If a player botches a Virtue or Willpower roll (for example,
                when confronted with Rötschreck), the Storyteller may decide that the experience causes a derangement in the character. 
            </p>
            <p>
                Other examples of derangement-inducing events include killing a loved one while in a frenzy, being buried alive as part of a Sabbat ritual, 
                or seeing hundreds of years of careful scheming dashed in an instant of bad luck. Generally, any experience that causes intense and unpleasant 
                emotion or thoroughly violates a character's beliefs or ethics is severe enough to cause a derangement. 
            </p>
            <p>
                The Storyteller determines which derangement a character receives, working with the player to choose (or create) one appropriate to the
                character's personality and the circumstances of the event that caused the disorder.
            </p>
            <p>
                It must be noted that people who are “crazy” are neither funny nor arbitrary in their actions. Insanity is frightening to those who are watching someone rage
                against unseen presences or hoard rotten meat to feed to the monsters that live next door; even something as harmless-sounding as talking to an invisible rabbit
                can become disturbing to observers.
            </p>
            <p>
                The insane, however, are only responding to a pattern known to them, stimuli that they perceive in their own minds. 
                To their skewed perceptions, what's happening to them is perfectly normal.
            </p>
            <p>
                Your vampire's derangement is there for a reason, whether he's a Malkavian who resided at Bedlam before his Embrace or a 
                Ventrue pack member who escaped from five months of torture at the hands of an Inquisitor. What stimuli is his insanity inflicting
                on him, and how is he reacting to what's happening? The player should work with his Storyteller to create a pattern of provocations for his derangement, 
                and then decide how his character reacts to such provocation.
            </p>
            <p>
                Derangements are a challenge to roleplay, without question, but a little time and care can result in an experience that is dramatic for all involved.
            </p>
            <div className={styles.derangements}>
                <h3>List of Derangements in the book:</h3>
                <div className={styles.derangementsList}>
                    <a href="https://en.wikipedia.org/wiki/Bipolar_disorder" target={'_blank'} rel={'noreferrer'}>Bipolar disorder</a>
                    <a href="https://en.wikipedia.org/wiki/Bulimia_nervosa" target={'_blank'} rel={'noreferrer'}>Bulimia</a>
                    <a href="https://en.wikipedia.org/wiki/Fugue_state" target={'_blank'} rel={'noreferrer'}>Fugue</a>
                    <a href="https://en.wikipedia.org/wiki/Hysteria" target={'_blank'} rel={'noreferrer'}>Hysteria</a>
                    <a href="https://en.wikipedia.org/wiki/Narcissistic_personality_disorder" target={'_blank'} rel={'noreferrer'}>Megalomania</a>
                    <a href="https://en.wikipedia.org/wiki/Dissociative_identity_disorder" target={'_blank'} rel={'noreferrer'}>Multiple personality disorder</a>
                    <a href="https://en.wikipedia.org/wiki/Obsessive%E2%80%93compulsive_disorder" target={'_blank'} rel={'noreferrer'}>OCD</a>
                    <a href="https://en.wikipedia.org/wiki/Paranoia" target={'_blank'} rel={'noreferrer'}>Paranoia</a>
                    <a href="https://whitewolf.fandom.com/wiki/List_of_Derangements_(WOD)#Supernatural_Derangements" target={'_blank'} rel={'noreferrer'}>Sanguinary Animism (p.292)</a>
                    <a href="https://en.wikipedia.org/wiki/Schizophrenia" target={'_blank'} rel={'noreferrer'}>Schizophrenia</a>
                </div>
            </div>
        </div>
    )
}

export default Derangements;