import { Link } from "react-router-dom";
import { AttributeSections } from "../../models/attribute";
import { attributes } from "../../services/attributesService";
import styles from './attributes.module.css';

function sectionStyle(attr: AttributeSections) {
    switch (attr) {
        case AttributeSections.Social:
            return styles.socialSection;
        case AttributeSections.Mental:
            return styles.mentalSection;
        default:
            return styles.physicalSection;
    }
}

function Attributes() {
    return (
        <div className="fadeIn">
            <div className={styles.attributeGrid}>
                <h2 className={styles.physicalSection}>Physical</h2>
                <h2 className={styles.socialSection}>Social</h2>
                <h2 className={styles.mentalSection}>Mental</h2>
                {
                    attributes.map((attribute) => {
                        return (
                            <Link to={`${attribute.name}`} className={`${sectionStyle(attribute.section)} ${styles.attributeButton}`}>
                                <p>{attribute.name}</p>
                                <h1><span className={`nf ${attribute.icon}`}/></h1>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
     
    )
}

export default Attributes;