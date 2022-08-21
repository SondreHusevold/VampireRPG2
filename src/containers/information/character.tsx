import { AnimationOnScroll } from "react-animation-on-scroll";
import { InformationCharacter } from "../../services/character_data/characters";
import styles from './information.module.css';


function Character(props: InformationCharacter) {
    return (
        <div className={styles.charactersection}>
            <div className={styles.characterText}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1 className={props.name.startsWith("Jonathan") ? styles.smallerJonathan : ""}> 
                        {props.name}
                    </h1>
                    <h2>{props.titles.join(", ")}</h2>
                    {props.description}
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default Character;