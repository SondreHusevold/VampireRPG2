import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Clan } from "../../models/clan";
import { clans } from "../../services/clanService";
import { ParseJsonText } from "../../utilities/parser";
import styles from './clanDetails.module.css';
import logoCaitiff from '../../services/clans_data/caitiff/logo.png';
import { sects } from "../../services/sectService";

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
        <div className={`${styles.clanText}`}>
            <h3>{clan.name} Opinons on Sects:</h3>
            <div className={styles.sectOpinions}>
                {clan.stereotypesSects.map((opinion) => {
                    if(opinion.opinion !== ""){
                        return (
                            <div className={styles.clanOpinion}>
                                <img title={`The ${opinion.sect}`} alt={`The ${opinion.sect}`} src={sects.find(x => opinion.sect.toLowerCase().startsWith(x.name.toLowerCase()))?.logo} />
                                <p>"{opinion.opinion}"</p>
                            </div>
                        )
                    }

                })}
            </div>

            <h3>{clan.name} Opinions on Clans:</h3>
            <div className={`${styles.clanOpinionGrid}`}>
                {clan.stereotypesClans.map((opinion) => {
                    let logo = clans.find(x => x.name.toLowerCase() === opinion.clan.toLowerCase())?.logo;
                    if(logo == null) {
                        logo = logoCaitiff;
                    }
                    
                    if(opinion.opinion !== ""){
                        return (
                            <div className={styles.clanOpinion}>
                                {logo && <img title={`${opinion.clan}s`} alt={`${opinion.clan}s`} src={`${logo}`} />}
                                <p>"{opinion.opinion}"</p>
                            </div>
                        )
                    }

                })}
            </div>
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

function NavigationLinker(props: { to: string, name: string }) {
    return (
        <NavLink to={props.to} className={
            ({ isActive }) => isActive ? styles.navigationActive : "" 
        }>{props.name}</NavLink>
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
            <div className={styles.clanHeader} key={`${clan.name}_header`}>
                <div className={styles.prevNextClan}>
                { 
                    prevClan != null && 
                    <Link to={`/clans/${prevClan.name}/description`}>
                        <RenderClan {...prevClan} />
                    </Link>
                }
                </div>
                <RenderClan {...clan} />
                {
                    <div className={styles.prevNextClan}>
                    { 
                        nextClan != null && 
                        <Link to={`/clans/${nextClan.name}/description`}>
                            <RenderClan {...nextClan} /> 
                        </Link>
                    }
                    </div>
                }
                <p className={styles.clanHeaderQuote}>"{clan.quote}"</p>
            </div>
            <div className={styles.detailsNavGrid}>
                <NavigationLinker to="description" name="Description"/>
                <NavigationLinker to="appearance" name="Appearance"/>
                <NavigationLinker to="traits" name="Traits"/>
                <NavigationLinker to="strengthsandweaknesses" name="Strengths and weaknesses"/>
                <NavigationLinker to="opinions" name="Opinions"/>
            </div>
            <div className={styles.lowerPage} key={`${clan.name}_lowerPage`}>
                <Routes >
                    <Route path={`description`} element={<ClanDescription {...clan} />}/>
                    <Route path={`appearance`} element={<ClanAppearance {...clan} />}/>
                    <Route path={`traits`} element={<ClanTraits {...clan} />}/>
                    <Route path={`strengthsandweaknesses`} element={<ClanStrWeak {...clan} />}/>
                    <Route path={`opinions`} element={<ClanOpinions {...clan} />}/>
                    <Route path={`/`} element={<Navigate to="description" />} />
                </Routes>
                <div className={styles.clanPicture}>
                    <img src={clan.picture.img} />
                    <p>Credit: <a href={`${clan.picture.link}`} target={`_blank`}>{clan.picture.credit}</a></p>
                </div>
                
            </div>
        </div>
    )
}

export default ClanDetail;