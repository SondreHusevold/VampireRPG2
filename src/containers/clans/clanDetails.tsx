import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { clans } from "../../services/clanService";
import styles from './clanDetails.module.css';
import NavigationLinker from "../common/navigationLinker";
import pageStyles from '../common/pages.module.css';
import ClanOpinions from "./clanOpinions";
import { ClanAppearance, ClanDescription, ClanStrWeak, ClanTraits } from "./clanPages";
import HeaderRoller from "../navigation/headerRoller";

function ClanDetail() {
    const { name } = useParams();
    const clan = clans.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];

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
            <HeaderRoller 
                iconSet="vtm-clan-icon" 
                allLinks={clans.map(x => {
                    return {
                        name: x.name,
                        link: `/clans/${x.name}/description`,
                        icon: `${x.logo}`
                    }
                })}
                currentName={clan.name}
            />
            <p className={styles.clanQuote}>"{clan.quote}"</p>
            <div className={pageStyles.navGrid}>
                <NavigationLinker to="description" name="Description"/>
                <NavigationLinker to="appearance" name="Appearance"/>
                <NavigationLinker to="traits" name="Traits"/>
                <NavigationLinker to="strengthsandweaknesses" name="Strengths and weaknesses"/>
                <NavigationLinker to="opinions" name="Opinions"/>
            </div>

            <div className={pageStyles.lowerPage} key={`${clan.name}_lowerPage`}>
                <Routes >
                    <Route path={`description`} element={<ClanDescription {...clan} />}/>
                    <Route path={`appearance`} element={<ClanAppearance {...clan} />}/>
                    <Route path={`traits`} element={<ClanTraits {...clan} />}/>
                    <Route path={`strengthsandweaknesses`} element={<ClanStrWeak {...clan} />}/>
                    <Route path={`opinions`} element={<ClanOpinions {...clan} />}/>
                    <Route path={`/`} element={<Navigate to="description" />} />
                </Routes>
                <div className={pageStyles.picture}>
                    <img alt={`${clan.name}`} src={clan.picture.img} />
                    <p>Credit: <a href={`${clan.picture.link}`} target={`_blank`}>{clan.picture.credit}</a></p>
                </div>
                
            </div>
        </div>
    )
}

export default ClanDetail;