/* eslint-disable jsx-a11y/heading-has-content */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Ability, AbilitySections } from "../../models/ability";
import { AbilitiesSection } from "../../services/abilityService";
import styles from './leftAbilitiesMenu.module.css';

interface LeftMenuProps {
    chosenAbility: Ability;
    abilities: AbilitiesSection[];
}

interface RenderSectionProps {
    section: AbilitiesSection;
    setSection: (section: AbilitySections) => void;
}

function RenderSection(props: RenderSectionProps) {
    const abilitySections = [
        AbilitySections.Knowledges,
        AbilitySections.Skills,
        AbilitySections.Talents
    ];

    function goLeftRight(right: boolean) {
        const currentIndex = abilitySections.indexOf(props.section.section);
        if(((currentIndex === 0 && !right) || (currentIndex === 2 && right))) {
            return;
        }
        else {
            const adder = right ? +1 : -1;
            props.setSection(abilitySections[currentIndex + adder]);
        }
    }

    function disableArrow(right: boolean) {
        const adder = right ? 1 : -1;
        const total = abilitySections.indexOf(props.section.section) + adder;
        if(total > 2 || total < 0) {
            return styles.disabled;
        }

        return styles.active;
    }

    return (
        <div className={styles.leftMenuSection}>
            <h3 onClick={() => goLeftRight(false)} className={`nf nf-mdi-arrow_left_bold ${disableArrow(false)}`}/>
            <h3>
                {props.section.name}
            </h3>
            <h3 onClick={() => goLeftRight(true)} className={`nf nf-mdi-arrow_right_bold ${disableArrow(true)}`}/>
            {
                props.section.abilities.map((attr) => {
                    return (
                        <div className={styles.leftMenuItem}>
                            <NavLink to={`/abilities/${attr.name}`} className={(navData) => navData.isActive ? "activeLink navLink" : "navLink" } >
                                <span className={`nf ${attr.icon}`} />
                                    {attr.name}
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

function LeftAbilitiesMenu(props: LeftMenuProps) {
    const [chosenSection, setChosenSection] = useState(props.chosenAbility.section);

    return (
        <div className={styles.leftMenuGrid}>
            { props.abilities.filter(x => x.section === chosenSection).map((section) => {
                return (
                    <RenderSection section={section} setSection={setChosenSection}/>
                )
            })}
        </div>
    )
}

export default LeftAbilitiesMenu;