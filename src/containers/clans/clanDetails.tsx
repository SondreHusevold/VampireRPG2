import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Clan } from "../../models/clan";
import { clans } from "../../services/clanService";
import { ParseJsonText } from "../../utilities/parser";
import styles from './clanDetails.module.css';

function ClanDescription(clan: Clan) {
    return (
        <div className={styles.clanText}>
            <h3>Nickname</h3>
            <p>{clan.nickname}</p>
            <h3>Description</h3>
            {ParseJsonText(clan.description)}
        </div>
    )
}

function ClanAppearance(clan: Clan) {
    return (
        <div className={styles.clanText}>
            <h3>Appearance:</h3>
            {ParseJsonText(clan.appearance)}
            <h3>Haven:</h3>
            {ParseJsonText(clan.haven)}
        </div>
    )
}

function ClanTraits(clan: Clan) {
    return (
        <div className={styles.clanText}>
            <h3>Background:</h3>
            {ParseJsonText(clan.background)}
            <h3>Creation:</h3>
            {ParseJsonText(clan.creation)}
            <h3>Organization:</h3>
            {ParseJsonText(clan.organization)}
        </div>
    )
}

function ClanStrWeak(clan: Clan) {
    return (
        <div className={styles.clanText}>
            <h3>Curse:</h3>
            {ParseJsonText(clan.weaknesses)}
            <h3>Disciplines:</h3>
            {clan.disciplines.map((disc) => {
                return (
                    <p>{disc}</p>
                )
            })}
        </div>
    )
}

function ClanOpinions(clan: Clan) {
    return (
        <div className={styles.clanText}>
            {clan.stereotypesClans.map((opinion) => {
                if(opinion.opinion === ""){
                    return <div/>
                }
                return (
                    <div>
                        <h3>{opinion.clan}</h3>
                        <p>{opinion.opinion}</p>
                    </div>
                )
            })}
        </div>
    )
}

function RenderClan(clan: Clan) {
    return (
        <div>
            <h1>Clan {clan.name}</h1>
            <img src={clan.logo}/>
        </div>
    )
}

function ClanDetail() {
    const { name } = useParams();
    const clan = clans.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];
    const prevClan = clans[clans.findIndex(x => x === clan)-1];
    const nextClan = clans[clans.findIndex(x => x === clan)+1];

    if(clan == null) {
        return (
            <div>
                <h1>Super special clan "{name}"...</h1>
                <Link to="/clans">How about you try again</Link>
            </div>
        )
    }

    return (
        <div className={styles.page}>
            <div className={styles.clanHeader}>
                <div className={styles.prevNextClan}>
                { 
                    prevClan != null && 
                    <Link to={`/clans/${prevClan.name}`}>
                        <RenderClan {...prevClan} />
                    </Link>
                }
                </div>
                <RenderClan {...clan} />
                {
                    <div className={styles.prevNextClan}>
                    { 
                        nextClan != null && 
                        <Link to={`/clans/${nextClan.name}`}>
                            <RenderClan {...nextClan} /> 
                        </Link>
                    }
                    </div>
                }
                <p className={styles.clanHeaderQuote}>"{clan.quote}"</p>
            </div>
            <div className={styles.detailsNavGrid}>
                <Link to="description">Description</Link>
                <Link to="appearance">Appearance</Link>
                <Link to="traits">Traits</Link>
                <Link to="strengthsandweaknesses">Strengths and weaknesses</Link>
                <Link to="opinions">Opinions</Link>
            </div>
            <div className={styles.lowerPage}>
                <Routes >
                    <Route path={`description`} element={<ClanDescription {...clan} />}/>
                    <Route path={`appearance`} element={<ClanAppearance {...clan} />}/>
                    <Route path={`traits`} element={<ClanTraits {...clan} />}/>
                    <Route path={`strengthsandweaknesses`} element={<ClanStrWeak {...clan} />}/>
                    <Route path={`opinions`} element={<ClanOpinions {...clan} />}/>
                    <Route path={`/`} element={<Navigate to="description" />} />
                </Routes>
                <div className={styles.clanPicture} >
                    <img src={clan.picture.img} />
                    <p>Credit: <a href={`${clan.picture.link}`} target={`_blank`}>{clan.picture.credit}</a></p>
                </div>
                
            </div>
        </div>
    )
}

export default ClanDetail;