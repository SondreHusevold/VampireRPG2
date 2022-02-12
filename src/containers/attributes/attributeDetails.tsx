import { Link, useParams } from 'react-router-dom';
import { Attribute } from '../../models/attribute';
import { attributes } from '../../services/attributesService';
import { PrintDots } from '../../utilities/dotprinter';
import { ParseJsonText } from '../../utilities/parser';
import styles from './attributeDetails.module.css';
import LeftMenu from './leftMenu';


function AttributeDetails() {
    const { name } = useParams();
    const attribute = attributes.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];

    return (
        <div className={styles.attributesGrid}>
            <LeftMenu attributes={attributes} />
            <div>
                <h1 key={`${attribute.name}_title`} className={styles.headerText}> {attribute.name}</h1>
                <h1 key={`${attribute.name}_title_icon`} className={`nf ${attribute.icon} ${styles.headerTextIcon}`}></h1>
                <div className={styles.lowerPage} key={`${attribute.name}_lowerPage`}>
                    <div className={styles.attributeText}>
                        {ParseJsonText(attribute.description)}
                        <h3>{attribute.name} dots:</h3>
                        <div className={styles.dotLevelSection}>
                            <div>
                            {
                                attribute.levels.map((lvl, index) => {
                                    return (
                                        <div className={styles.dotLevel}>
                                            <p>{PrintDots(index+1)}</p>
                                            <p>{lvl}</p>
                                        </div>
                                    )  
                                })
                            }
                            </div>
                        </div>
                        <h3>Specialties:</h3>
                        {attribute.specialties.map((special, index) => {
                            return (
                                <span>{special}{attribute.specialties.length !== index+1 ? ", " : "."}</span>
                            )
                        })}
                    </div>
                    <div className={styles.attributePicture}>
                        <img src={attribute.image.img} />
                        <p>Credit: <a href={`${attribute.image.creditLink}`} target={`_blank`}>{attribute.image.credit}</a></p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default AttributeDetails;