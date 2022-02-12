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
                        {ParseJsonText(ability.description)}
                        
                        <div className={styles.lowerContent}>
                            <div>
                                <h3>Specialties</h3>
                                {ability.specialties.map((special, index) => {
                                    return (
                                        <span>{special}{ability.specialties.length !== index+1 ? ", " : "."}</span>
                                    )
                                })}
                            </div>
                            <div>
                                <h3>Possessed by</h3>
                                {
                                    ability.possessedBy.map((possessedBy, index) => {
                                        return (
                                            <span>{possessedBy}{ability.possessedBy.length !== index+1 ? ", " : "."}</span>
                                        )
                                    })
                                }
                            </div>
                            <span className={styles.split}/>
                            <h3 className={styles.dotHeader}>{ability.name} dots</h3>
                            {
                                ability.levels.map((lvl, index) => {
                                    return (
                                        <div 
                                            className={`${index+1 > 3 ? styles.dotLevelRight : styles.dotLevel }`} 
                                            style={{gridRow: index+1 > 3 ? ((index + 1) % 4) + 4 : 'auto'}}
                                        >
                                            <span>{PrintDots(index+1)}</span>
                                            <p>{lvl}</p>
                                        </div>
                                    )  
                                })
                            }
                            <div>
                                
                            </div>
                        </div>
                         
                    </div>                       
                </div>
            </div>
        </div>
    )
}

export default AbilitiesDetails;