import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import styles from './combatStages.module.css';

function Initiatives() {
    return (
        <>
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
                Remember that wound penalties subtract directly from a character's initiative rating, while Celerity dots that aren't being used for extra actions add to it
            </p>
        </>
    )
}

function Attack() {
    return (
        <>
            <h2>The attack stage:</h2>
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
            <p><b>Most attacks are made versus difficulty 6.</b></p>
            <p>
                This can be adjusted however for situational modifiers like long range or cramped quarters.
            </p>
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
        </>
    )
}

function Resolution() {
    return (
        <>
            <h2>Resolution:</h2>
            <p>
                During this stage, you determine the damage inflicted
                by your character's attack, and the Storyteller describes
                what occurs in the turn.
            </p>
            <p>
                Normally, additional successes gained on a Trait roll
                simply mean that you do exceptionally well. In combat, each extra success you get on an attack roll equals an additional die you add automatically to your damage dice pool. This creates cinematic and often fatal
                combat.
            </p>
            <p>
                <b>Example:</b> You have an axe (Strength +3 damage), your strength is two. If you get one success, you roll 5 dice. If you get three successes, you roll 7 dice.
            </p>
            <p>
                After damage have been rolled against your character, you are allowed to do a soak roll. 
            </p>
        </>
    )
}


function NavigationLinker(props: { to: string, name: string }) {
    return (
        <NavLink to={props.to} className={
            ({ isActive }) => isActive ? styles.navigationActive : "" 
        }>{props.name}</NavLink>
    )
}

function CombatNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
                <NavigationLinker to="initiative" name="Initiative"/>
                <NavigationLinker to="attack" name="Attack"/>
                <NavigationLinker to="resolution" name="Resolution"/>
            </div>
        </>
    )
}

function CombatStages() {
    return (
        <>
            <h1>Combat stages</h1>
            <p>
                Combat is divided into a series of three-second turns.
				Each combat turn has three stages to make it easier to keep track
				of things.
			</p>

            <CombatNavigations />
            <Routes>
                <Route path={`initiative`} element={<Initiatives />}/>
                <Route path={`attack`} element={<Attack />}/>
                <Route path={`resolution`} element={<Resolution />}/>
                <Route path={`/`} element={<Navigate to="initiative" />} />
            </Routes>
        </>
    )
}

export default CombatStages;