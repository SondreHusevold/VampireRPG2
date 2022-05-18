/* eslint-disable jsx-a11y/heading-has-content */

import LeftAbilitiesMenu from "./leftAbilitiesMenu"
import styles from './abilitiesDetails.module.css';
import { abilities } from "../../services/abilityService";
import { useParams } from "react-router-dom";
import { ParseJsonText } from "../../utilities/parser";
import { PrintDots } from "../../utilities/dotprinter";
import pageStyles from '../common/pages.module.css';
import { useEffect } from "react";

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

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className={styles.abilitiesTopGrid}>
            <LeftAbilitiesMenu abilities={abilities} chosenAbility={ability} />
            <div className={styles.abilityContent} key={`${ability.name}_content`}>
                <h1 className={styles.headerText}>{ability.name}</h1>
                <h1 className={`nf ${ability.icon} ${styles.bigIcon}`}/>
                <div className={`${pageStyles.lowerPage} ${styles.abilityLowerPage}`} key={`${ability.name}_lowerPage`}>
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
                                            style={
                                                window.screen.width >= 1300 // Only at bigger screens.
                                                ? {gridRow: index+1 > 3 ? ((index + 1) % 4) + 4 : 'auto'} 
                                                : {}
                                            }
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