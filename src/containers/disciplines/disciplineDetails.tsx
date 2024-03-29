import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Discipline } from "../../models/discipline";
import { disciplines } from "../../services/disciplineService";
import pageStyles from '../common/pages.module.css';
import Picture from "../common/picture";
import HeaderRoller from "../navigation/headerRoller";
import styles from './disciplineDetails.module.css';

function RenderDotInformation(props: { discipline: Discipline, dots: number }) {
    const lvl = props.discipline.levels[props.dots-1];
    return (
        <div className={`fadeIn ${styles.dotInfoSection}`} key={`discipline_${lvl.name}`}>
            <h2>{lvl.name.toUpperCase()}</h2>
            {lvl.description}
            <h4>Rules</h4>
            {lvl.system}
        </div>
    )
}

function RenderDot(props: { filled: boolean, setDots: () => void, hovering: boolean }) {
    return <span className={
        `${styles.dotLevel} ${props.hovering ? styles.dotHover : ''} ${props.filled ? styles.filled : ""}`
    } onMouseEnter={props.setDots}></span>
}

interface RenderDotsNavigationProps {
    dots: number;
    setDots: (dots: number) => void;
}

function RenderDotsNavigation(props: RenderDotsNavigationProps) {
    const [dots, setDots] = useState(props.dots);

    useEffect(() => {
        if(props.dots === 1) {
            setDots(1);
        }
    }, [props.dots]);

    return (
        <div className={styles.dots} onMouseLeave={() => setDots(props.dots)} onClick={() => props.setDots(dots)}>
            <RenderDot filled={props.dots > 0} setDots={() => setDots(1)} hovering={dots > 0} />
            <RenderDot filled={props.dots > 1} setDots={() => setDots(2)} hovering={dots > 1} />
            <RenderDot filled={props.dots > 2} setDots={() => setDots(3)} hovering={dots > 2} />
            <RenderDot filled={props.dots > 3} setDots={() => setDots(4)} hovering={dots > 3} />
            <RenderDot filled={props.dots > 4} setDots={() => setDots(5)} hovering={dots > 4} />
        </div>
    )
}

function DisciplineDetails() {
    const [dotsChosen, setDotsChosen] = useState<number>(1);
    const { name } = useParams();
    const discipline = disciplines.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    useEffect(() => {
        setDotsChosen(1);
    }, [name])

    return (
        <div className={styles.disciplinesGrid}> 
            <HeaderRoller 
                iconSet="vtm-icon" 
                allLinks={disciplines.map(x => {
                    return {
                        name: x.name,
                        link: `/disciplines/${x.name}`,
                        icon: `${x.icon}`
                    }
                })}
                currentName={discipline.name}
            />

            <div className={`${pageStyles.lowerPage}`} key={`${discipline.name}_lowerPage`}>
                <div className={`fadeInSlower ${styles.ownedByClan}`} key={`${discipline.name}_owned`}>
                    {discipline.clans.map((clan) => {
                        return (
                            <Link to={`/clans/${clan.name}/description`}>Clan {clan.name}</Link>
                        )
                    })}
                </div>
                <div className={`fadeInSlower ${styles.disciplineText}`} key={`${discipline.name}_description`}>
                    {discipline.description}
                </div>
                <div>
                    <Picture {...discipline.image} mobile={true} desc={discipline.name}  />
                    {
                        discipline.system &&
                        <div className={`fadeInSlowest ${styles.dotSection}`}>
                            <h3>System</h3>
                            {discipline.system}
                        </div>
                    }
                    

                    <div className={`fadeInSlowest ${styles.dotSection}`}>
                        <h3>{discipline.name} dots</h3>
                        <RenderDotsNavigation dots={dotsChosen} setDots={setDotsChosen}/>
                        <div className={styles.dotLevelSection} key={`${discipline.name}_dots`}>
                            <RenderDotInformation discipline={discipline} dots={dotsChosen}/>
                        </div>
                    </div>
                </div>

                <Picture {...discipline.image} mobile={false} desc={discipline.name}  />
            </div>
        </div>
    )
}

export default DisciplineDetails;