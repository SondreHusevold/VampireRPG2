import LeftAbilitiesMenu from "./leftAbilitiesMenu"
import styles from './abilities.module.css';
import { abilities } from "../../services/abilityService";
import { useParams } from "react-router-dom";
import { ParseJsonText } from "../../utilities/parser";
import { PrintDots } from "../../utilities/dotprinter";

function findAbility(name: string | undefined) {
    for (const section of abilities) {
        let possibleAbility = section.abilities.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];
        if(possibleAbility != null)
            return possibleAbility;
    }

    return abilities[0].abilities[0];;
}

function AbilitiesDetails() {
    const { name } = useParams();
    const ability = findAbility(name);

    return (
        <div className={styles.abilitiesTopGrid}>
            <LeftAbilitiesMenu abilities={abilities} chosenAbility={ability} />
            <div className={styles.abilityContent} key={`${ability.name}_content`}>
                <h1 className={styles.headerText}>{ability.name}</h1>
                <h1 className={`nf ${ability.icon} ${styles.bigIcon}`}/>
                <div className={styles.lowerPage} key={`${ability.name}_lowerPage`}>
                    <div className={styles.abilityText}>
                        <p>{ParseJsonText(ability.description)}</p>
                        
                        <div className={styles.lowerContent}>
                            <div>
                                <h3>{ability.name} dots:</h3>
                                {
                                    ability.levels.map((lvl, index) => {
                                        return (
                                            <div className={styles.dotLevel}>
                                                <p>{PrintDots(index+1)}</p>
                                                <p>{lvl}</p>
                                            </div>
                                        )  
                                    })
                                }
                            </div>
                            <div>
                                <h3>Specialties:</h3>
                                {ability.specialties.map((special, index) => {
                                    return (
                                        <span>{special}{ability.specialties.length !== index+1 ? ", " : "."}</span>
                                    )
                                })}
                                <h3>Possessed by:</h3>
                                {
                                    ability.possessedBy.map((possessedBy, index) => {
                                        return (
                                            <span>{possessedBy}{ability.possessedBy.length !== index+1 ? ", " : "."}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                         
                    </div>                       
                </div>
            </div>
        </div>
    )
}

export default AbilitiesDetails;