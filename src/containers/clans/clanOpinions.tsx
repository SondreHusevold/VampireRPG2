import { Clan } from "../../models/clan";
import { clans } from "../../services/clanService";
import styles from './clanDetails.module.css';
import { sects } from "../../services/sectService";

function ClanOpinions(clan: Clan) {
    return (
        <div className={`${"fadeIn"}`}>
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
                    return ""
                })}
            </div>

            <h3>{clan.name} Opinions on Clans:</h3>
            <div className={`${styles.clanOpinionGrid}`}>
                {clan.stereotypesClans.map((opinion) => {
                    let logo = clans.find(x => x.name.toLowerCase() === opinion.clan.toLowerCase())?.logo;
                    if(logo == null) {
                        logo = "I";
                    }
                    
                    if(opinion.opinion !== ""){
                        return (
                            <div className={styles.clanOpinion}>
                                <span className={`vtm-clan-icon ${styles.opinionClanIcon}`} title={`${opinion.clan}s`}>{logo}</span>
                                <p>"{opinion.opinion}"</p>
                            </div>
                        )
                    }
                    return "";
                })}
            </div>
        </div>
    )
}

export default ClanOpinions;