import { NavLink } from 'react-router-dom';
import { Attribute, AttributeSections } from '../../models/attribute';
import styles from './attributeDetails.module.css';

interface LeftMenuProps {
    attributes: Attribute[];
}

interface RenderSectionProps extends LeftMenuProps{
    section: AttributeSections;
}

function getSectionName(section: AttributeSections) {
    switch (section) {
        case AttributeSections.Social:
            return "Social";
        case AttributeSections.Mental:
            return "Mental";
        default:
            return "Physical"
    }
}

function RenderSection(props: RenderSectionProps) {

    return (
        <div className={styles.leftMenuSection}>
            <h3>{getSectionName(props.section)}</h3>
                {
                    props.attributes.map((attr) => {
                        if(attr.section === props.section) {
                            return (
                                <div className={styles.leftMenuItem}>
                                    <NavLink to={`/attributes/${attr.name}`} className={(navData) => navData.isActive ? "activeLink" : "" } >
                                        <span className={`nf ${attr.icon}`} />
                                        {attr.name}
                                    </NavLink>
                                </div>
                            )
                        }
                        return "";
                    })
                }
        </div>
    )
}

function LeftMenu(props: LeftMenuProps) {
    return (
        <div className={styles.leftMenuGrid}>
            <RenderSection {... props} section={AttributeSections.Physical} />
            <RenderSection {... props} section={AttributeSections.Social} />
            <RenderSection {... props} section={AttributeSections.Mental} />
        </div>
    )
}

export default LeftMenu;