import { Navigate, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { clans } from "../../services/clanService";
import styles from './clanDetails.module.css';
import NavigationLinker from "../common/navigationLinker";
import pageStyles from '../common/pages.module.css';
import ClanOpinions from "./clanOpinions";
import { ClanAppearance, ClanDescription, ClanStrWeak, ClanTraits } from "./clanPages";
import HeaderRoller from "../navigation/headerRoller";
import Picture from "../common/picture";
import { useEffect } from "react";

function ClanDetail() {
    const { name } = useParams();
    const clan = clans.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
      
    return (
        <div className={styles.page}>
            <HeaderRoller 
                iconSet="vtm-clan-icon" 
                allLinks={clans.map(x => {
                    return {
                        name: `Clan ${x.name}`,
                        link: `/clans/${x.name}/description`,
                        icon: `${x.logo}`
                    }
                })}
                currentName={`Clan ${clan.name}`}
            />
            <p className={`fadeIn ${styles.clanQuote}`} key={`${clan.name}_quote`}>"{clan.quote}"</p>

            <Picture {...clan.picture} mobile={true} desc={clan.name} />
            <div className={`fadeIn ${pageStyles.navGrid}`} key={`${clan.name}_navi`}>
                <NavigationLinker to="description" name="Description"/>
                <NavigationLinker to="appearance" name="Appearance"/>
                <NavigationLinker to="traits" name="Traits"/>
                <NavigationLinker to="strengthsandweaknesses" name="Strengths and weaknesses"/>
                <NavigationLinker to="opinions" name="Opinions"/>
            </div>

            <div className={`${pageStyles.lowerPage} ${pageStyles.picturePadding}`} key={`${clan.name}_lowerPage`}>
                <Routes >
                    <Route path={`description`} element={<ClanDescription {...clan} />}/>
                    <Route path={`appearance`} element={<ClanAppearance {...clan} />}/>
                    <Route path={`traits`} element={<ClanTraits {...clan} />}/>
                    <Route path={`strengthsandweaknesses`} element={<ClanStrWeak {...clan} />}/>
                    <Route path={`opinions`} element={<ClanOpinions {...clan} />}/>
                    <Route path={`/`} element={<Navigate to="description" />} />
                </Routes>
                
                <Picture {...clan.picture} pos={"N/A"} mobile={false} desc={clan.name} />
            </div>
        </div>
    )
}

export default ClanDetail;