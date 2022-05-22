import { useState } from 'react';
import { Artwork } from '../../models/artwork';
import styles from './picture.module.css';

interface PictureProps extends Artwork {
    desc: string;
    mobile: boolean;
    pos: string;
}

function Picture(props: PictureProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.pictureContainer}>
            <div hidden={!expanded} onClick={() => setExpanded(false)}>
                <div className={styles.expandedBG}/>
                    <div className={styles.expandedImg}>
                        <img alt={`${props.desc}`} src={props.img} />
                        <button>x</button>
                    </div>
            </div>
            <div className={`fadeIn ${props.mobile ? styles.mobile : styles.desktop} ${styles.picture}`}>
                <img 
                    style={{objectPosition: props.pos}} 
                    alt={`${props.desc}`} src={props.img} 
                    onClick={() => props.mobile ? setExpanded(true) : {}}
                />
                <p>Credit: <a className={styles.pictureLink} href={`${props.link}`} target={`_blank`}>{props.credit}</a></p>
            </div>
        </div>
        
    )
}

export default Picture;