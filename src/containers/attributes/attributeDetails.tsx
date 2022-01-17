import { Link, useParams } from 'react-router-dom';
import { Attribute } from '../../models/attribute';
import { attributes } from '../../services/attributesService';
import { ParseJsonText } from '../../utilities/parser';
import styles from './attributeDetails.module.css';
import LeftMenu from './leftMenu';

function PrintDots(amount: number) {
    let dots = "";
    
    for (let index = 0; index < amount; index++) {
        dots += "●";
    }

    return dots;
}

function AttributeDetails() {
    const { name } = useParams();
    const attribute = attributes.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];

    return (
        <div className={styles.attributesGrid}>
            <LeftMenu attributes={attributes} />
            <div>
                <h1 className={styles.headerText}> <span className={`nf ${attribute.icon}`}/> {attribute.name}</h1>
                <div className={styles.lowerPage} key={`${attribute.name}_lowerPage`}>
                    <div className={styles.attributeText}>
                        <p>{ParseJsonText(attribute.description)}</p>
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
                        <img src={attribute.image} />
                        <p>Credit: <a href={`asdasdasd`} target={`_blank`}>Credit</a></p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default AttributeDetails;