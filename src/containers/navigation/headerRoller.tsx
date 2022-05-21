import { Link } from 'react-router-dom';
import styles from '../common/headerRoller.module.css';

//  ************************************
//
//  This is the header at the top of Clans and Disciplines with icon and header text.
//
//  ************************************

interface HeaderRollerProps {
    allLinks: HeaderRollerLink[];
    currentName: string;
    iconSet: string;
}

export interface HeaderRollerLink {
    name: string;
    link: string;
    icon: string;
}

interface HeaderRollerLinkProps {
    roller: HeaderRollerLink;
    iconSet: string;
}

function RenderLink(link: HeaderRollerLinkProps) {

    if(link?.roller != null) {
        return (
            <div>
                <h1>{link.roller.name}</h1>
                <h1 className={`${link.iconSet} ${styles.linkIcon}`}>{link.roller.icon}</h1>
            </div>
        )
    }
    return <div/>
}

function HeaderRoller(props: HeaderRollerProps) {
    const current = props.allLinks[props.allLinks.findIndex(x => x.name === props.currentName)];
    const next = props.allLinks[props.allLinks.findIndex(x => x.name === props.currentName)+1];
    const previous = props.allLinks[props.allLinks.findIndex(x => x.name === props.currentName)-1];

    return (
        <div className={`fadeIn ${styles.headerRoller}`} key={`${props.currentName}_header`}>
            <div className={styles.prevNext}>
            { 
                previous != null && 
                <Link to={`${previous.link}`}>
                    <RenderLink roller={previous} iconSet={props.iconSet}/>
                </Link>
            }
            </div>

            <RenderLink roller={current} iconSet={props.iconSet} />

            <div className={styles.prevNext}>
            { 
                next != null && 
                <Link to={`${next.link}`}>
                    <RenderLink roller={next} iconSet={props.iconSet} />
                </Link>
            }
            </div>
        </div>
    )
}

export default HeaderRoller;