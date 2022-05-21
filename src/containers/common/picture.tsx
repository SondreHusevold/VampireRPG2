import { useState } from 'react';
import { Artwork } from '../../models/artwork';
import styles from './picture.module.css';

interface PictureProps extends Artwork {
    desc: string;
    hidden: boolean;
    pos: string;
}

function Picture(props: PictureProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div hidden={props.hidden} className={styles.pictureContainer}>
            <div hidden={!expanded} onClick={() => setExpanded(false)}>
                <div className={styles.expandedBG}/>
                    <div className={styles.expandedImg}>
                        <img alt={`${props.desc}`} src={props.img} />
                        <button>x</button>
                    </div>
            </div>
            <div className={`fadeIn ${styles.picture}`}>
                <img 
                    style={{objectPosition: props.pos}} 
                    alt={`${props.desc}`} src={props.img} 
                    onClick={() => window.screen.width <= 1300 ? setExpanded(true) : {}}
                />
                <p>Credit: <a href={`${props.link}`} target={`_blank`}>{props.credit}</a></p>
            </div>
        </div>
        
    )
}

export default Picture;