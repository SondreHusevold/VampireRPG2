import { Link } from "react-router-dom";
import { Clan } from "../../models/clan";
import styles from './clanDetails.module.css';
import { disciplines } from "../../services/disciplineService";


export function ClanDescription(clan: Clan) {
    return (
        <div className={"fadeIn"}>
            <h3>Nickname</h3>
            <p>{clan.nickname}</p>
            <h3>Description</h3>
            {clan.description}
        </div>
    )
}

export function ClanAppearance(clan: Clan) {
    return (
        <div className={"fadeIn"}>
            <h3>Appearance</h3>
            {clan.appearance}
            <h3>Haven</h3>
            {clan.haven}
        </div>
    )
}

export function ClanTraits(clan: Clan) {
    return (
        <div className={"fadeIn"}>
            <h3>Background</h3>
            {clan.background}
            <h3>Creation</h3>
            {clan.creation}
            <h3>Organization</h3>
            {clan.organization}
        </div>
    )
}

export function RenderDisciplinesStrength(clan: Clan) {
    return (
        <div className={styles.disciplinesFlex}>
        {
            clan.disciplines.map((disc) => {
            const discipline = disciplines.find(x => x.name.toLowerCase() === disc.toLowerCase());
            if(discipline == null) {
                return <p>ERROR: Discipline not found.</p>
            }
    
            return (
                <Link to={`/disciplines/${disc}`} className={styles.disciplineButton} key={`${disc}_button`}>
                    <p>{disc}</p>
                    <h1 className={`vtm-icon`}>{discipline.icon}</h1>
                </Link>
            )})
        }
    </div>
    )
}

export function ClanStrWeak(clan: Clan) {
    return (
        <div className={"fadeIn"}>
            <h3>Curse</h3>
            {clan.weaknesses}
            <h3 className={styles.disciplinesHeader}>Disciplines</h3>
            <RenderDisciplinesStrength {... clan} /> 
        </div>
    )
}