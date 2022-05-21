function Attack() {
    return (
        <div className={`fadeIn`}>
            <h2>The attack stage</h2>
            <p>
                Attacks are the meat of the combat turn. You use a certain Attribute/Ability combination depending on the type of combat in which your character is engaged.
            </p>
            <p>
                If your character doesn't have points in
                the necessary Ability, fall back to the Attribute (Dexterity).
            </p>
            <p>
                <b>Close Combat: </b> Dexterity + Brawl (unarmed) or Dexterity + Melee (armed).
            </p>
            <p>
                <b>
                Ranged Combat: 	</b>Dexterity + Firearms (guns)
                or Dexterity + Athletics (thrown weapons).
            </p>
            <p><b>Most attacks are made versus difficulty 6.</b> This can be adjusted however for situational modifiers like long range or cramped quarters.</p>
            <p>
                In ranged combat, your weapon may modify your dice
                pool or difficulty (due to rate of fire, a targeting scope, etc.); check the weapon's statistics for details.
            </p>
            <p>
                Any extra successes you get above the first adds one die to your damage roll.
            </p>
            <p>
                Remember you can abort your action at any time to do a defensive maneuver as long as your character hasn't made an action yet.
            </p>
            <p>
                Aborting requires you to roll a willpower rating of 6 or use a willpower point. Doing so allows you to do a block, dodge or parry. (See Defensive Maneuvers)
            </p>
        </div>
    )
}

export default Attack;