import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Discipline } from "../../models/discipline";
import { disciplines } from "../../services/disciplineService";
import { PrintDots, PrintEmptyDots } from "../../utilities/dotprinter";
import { ParseJsonText } from "../../utilities/parser";
import styles from './disciplineDetails.module.css';

function RenderDiscipline(discipline: Discipline) {
    return (
        <div className={styles.headerDiscipline}>
            <h1 key={`${discipline.name}_title`} className={styles.headerLinkText}>{discipline.name}</h1>
            <span className={`vtm-icon`}>{discipline.icon}</span>
        </div>
    )
}

function RenderDotInformation(props: { discipline: Discipline, dots: number }) {
    const lvl = props.discipline.levels[props.dots-1];
    return (
        <div className={styles.dotInfoSection} key={`discipline_${lvl.name}`}>
            <h3>{lvl.name.toUpperCase()}</h3>
            {lvl.description}
            <h4>Rules</h4>
            {lvl.system}
        </div>
    )
}

function RenderDot(props: { filled: boolean, setDots: () => void, hovering: boolean }) {
    return <span className={
        `${styles.dotLevel} ${props.hovering ? styles.dotHover : ''}`
    } onMouseEnter={props.setDots}>{ props.filled ? '●' : '○'}</span>
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

function getScrollAmount() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    return Math.round(scrollPercent * 100);
}

function DisciplineDetails() {
    const [dotsChosen, setDotsChosen] = useState<number>(1);
    const { name } = useParams();
    const discipline = disciplines.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];
    const prevDisc = disciplines[disciplines.findIndex(x => x === discipline)-1];
    const nextDisc = disciplines[disciplines.findIndex(x => x === discipline)+1];

    useEffect(() => {
        setDotsChosen(1);
    }, [name])

    return (
        <div className={styles.disciplinesGrid}> 
            <div className={`${styles.disciplineHeader}`}>
            <div className={styles.prevNextDisc}>
                { 
                    prevDisc != null && 
                    <Link to={`/disciplines/${prevDisc.name}`}>
                        <RenderDiscipline {...prevDisc} />
                    </Link>
                }
                </div>
                <RenderDiscipline {...discipline} />
                {
                    <div className={styles.prevNextDisc}>
                    { 
                        nextDisc != null && 
                        <Link to={`/disciplines/${nextDisc.name}`}>
                            <RenderDiscipline {...nextDisc} /> 
                        </Link>
                    }
                    </div>
                }
            </div>
            <div className={styles.lowerPage} key={`${discipline.name}_lowerPage`}>
                <div className={styles.ownedByClan}>
                    {discipline.clans.map((clan) => {
                        return (
                            <Link to={`/clans/${clan.name}/description`}>Clan {clan.name}</Link>
                        )
                    })}
                </div>
                <div className={styles.disciplineText}>
                    {discipline.description}
                </div>
                <div>
                {
                    discipline.system &&
                    <div>
                        <h3>System</h3>
                        {discipline.system}
                    </div>
                }
                <div className={styles.dotSection}>
                    <h3>{discipline.name} dots</h3>
                    <RenderDotsNavigation dots={dotsChosen} setDots={setDotsChosen}/>
                    <div className={styles.dotLevelSection} key={`${discipline.name}_dots`}>
                        <RenderDotInformation discipline={discipline} dots={dotsChosen}/>
                    </div>
                </div>
                </div>
                <div className={styles.picture}>
                    <img src={discipline.image.img} />
                    <p>Credit: <a href={`${discipline.image.creditLink}`} target={`_blank`}>{discipline.image.credit}</a></p>
                </div>
            </div>
        </div>
    )
}

export default DisciplineDetails;