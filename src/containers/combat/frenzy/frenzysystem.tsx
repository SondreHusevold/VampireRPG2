function FrenzySystem() {
    return (
        <div className="fadeIn">
            <h2>System</h2>
            <p>A vampire in frenzy gains several temporary benefits from the state.</p>
            <ul>
                <li>
                    Vampires in frenzy completely ignore all dice pool penalties inflicted by injury, until the frenzy ends. 
                    Once the frenzy is finished, the pain comes back and the crippling effects of the wounds take hold again.
                </li>
                <li>
                    All difficulties to Dominate or otherwise mentally control a frenzied character are increased by two, 
                    and all difficulties to resist the effects of such mental control are reduced by two.
                </li>
                <li>
                    The character never needs Willpower rolls to accomplish a feat, because the rage fueling the vampire's actions is both a catalyst to 
                    heightened state of mind and a barrier against unwanted intrusions.
                </li>
                <li>
                    Characters in frenzy are immune to the detrimental effects of Rötschreck.
                </li>
            </ul>
            <p>
                In some cases, Kindred can manage to overcome the urge to frenzy. A vampire on the verge of frenzy must make a Self-Control roll against a variable difficulty. 
                The difficulty is often 6 to 8, but if trying to overcome the urge to commit a blatantly evil act, 
                the vampire's player can roll against a difficulty of (9 minus Conscience) instead.
            </p>
            <p>
                The character must score five successes to completely overcome the desires for violence, but even one success halts the frenzy temporarily. 
                For each success below five, the character can resist the urge to frenzy for one turn. After this duration expires, the character may try again to gain extra
                successes and thus continue to resist the frenzy. Once five successes are acquired, over a longer or shorter period, the vampire resists the Beast's urges.
            </p>
            <p>
                Failure means the character goes into an emotional rampage, doing exactly what she wants to do with no worries of later repercussions. 
            </p>
            <p>
            Botching the Self-Control roll means the character remains in a frenzy until the Storyteller decides otherwise, and she may gain a derangement related to the frenzy.
            </p>
        </div>
    )
}

export default FrenzySystem;