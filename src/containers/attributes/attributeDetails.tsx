/* eslint-disable jsx-a11y/heading-has-content */

import { useParams } from 'react-router-dom';
import { attributes } from '../../services/attributesService';
import { PrintDots } from '../../utilities/dotprinter';
import { ParseJsonText } from '../../utilities/parser';
import styles from './attributeDetails.module.css';
import LeftMenu from './leftMenu';
import pageStyles from '../common/pages.module.css';
import Picture from '../common/picture';
import { useEffect } from 'react';


function AttributeDetails() {
    const { name } = useParams();
    const attribute = attributes.filter(x => x.name.toLowerCase() === name?.toLowerCase())[0];

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={styles.attributesGrid}>
            <LeftMenu attributes={attributes} />
            <div>
                <h1 key={`${attribute.name}_title`} className={pageStyles.headerTop}> {attribute.name}</h1>
                <h1 key={`${attribute.name}_title_icon`} className={`nf ${attribute.icon} ${styles.headerTextIcon}`}></h1>
                <div className={pageStyles.lowerPage} key={`${attribute.name}_lowerPage`}>
                    <div className={"fadeIn"}>
                        {ParseJsonText(attribute.description)}
                        <Picture {...attribute.image} desc={attribute.name} hidden={window.screen.width > 1300} />
                        <h3 className={styles.dotHeader}>{attribute.name} dots</h3>
                        <div className={styles.dotLevelSection}>
                            <div>
                            {
                                attribute.levels.map((lvl, index) => {
                                    return (
                                        <div className={styles.dotLevel}>
                                            <p className={styles.printedDots}>{PrintDots(index+1)}</p>
                                            <p className={styles.dotsDesc}>{lvl}</p>
                                        </div>
                                    )  
                                })
                            }
                            </div>
                        </div>
                        <h3 className={styles.dotHeader}>Specialties</h3>
                        <div className={styles.specialties}>
                            {attribute.specialties.map((special, index) => {
                            return (
                                <span>{special}{attribute.specialties.length !== index+1 ? ", " : "."}</span>
                                )
                            })}
                        </div>
                    </div>

                    <Picture {...attribute.image} desc={attribute.name} hidden={window.screen.width <= 1300} />
                </div>
            </div>
        </div>
    )
}

export default AttributeDetails;