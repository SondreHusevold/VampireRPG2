import { Link } from "react-router-dom";
import { AttributeSections } from "../../models/attribute";
import { attributes } from "../../services/attributesService";
import styles from './attributes.module.css';
import pageStyles from '../common/pages.module.css';

function RenderColumn(props: { type: AttributeSections }) {
    
    return (
        <div className={styles.flexer} key={`section_${AttributeSections[props.type]}`}>
            <h2 className={pageStyles.headerTop}>{AttributeSections[props.type]}</h2>
            {
                attributes.map((attribute) => {
                    if(attribute.section === props.type) {
                        return (
                            <Link to={`${attribute.name}`} className={`${styles.attributeButton}`}>
                                <span className={`nf ${attribute.icon}`}/> 
                                <p>{attribute.name}</p>
                            </Link>
                        )
                    }
                    return (
                        ""
                    )
                })
            }
        </div>
    )
}

function Attributes() {
    return (
        <div className={`fadeIn ${styles.attributeGrid}`}>
            <RenderColumn type={AttributeSections.Physical}/>
            <RenderColumn type={AttributeSections.Social}/>
            <RenderColumn type={AttributeSections.Mental}/>
        </div>
    )
}

export default Attributes;