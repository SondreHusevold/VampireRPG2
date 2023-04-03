import { Link } from 'react-router-dom';
import Picture from '../common/picture';
import styles from './misc.module.css';
import pageStyles from '../common/pages.module.css';
import picture from './misc.jpg';

function Misc() {
    return (
        <div className={`fadeIn ${styles.miscWrap}`}>
            <h2 className={`${styles.miscHeader} ${pageStyles.headerTop}`}>Miscellaneous</h2>
            <Picture img={picture} credit={`Nixeu`} desc="Looking at you" link='https://www.artstation.com/nixeu' mobile={true} pos={`30% 15%`} />
                <div className={styles.miscWrapper}>
                    <div className={`${styles.miscGrid}`}>
                        <a target={`_blank`} href="/CharacterSheet.pdf">
                            <h1 className='nf nf-mdi-file_document_box'/>
                            <h4>Sheets</h4>
                        </a>
                        <Link to="music">
                            <h1 className={`nf nf-mdi-spotify`}/>
                            <h4>Music</h4>
                        </Link>
                        <Link to="sessions">
                            <h1 className={`nf nf-mdi-book`}/>
                            <h4>Sessions</h4>
                        </Link>
                    </div>
                    <Picture img={picture} credit={`Nixeu`} desc="Looking at you" link='https://www.artstation.com/nixeu' mobile={false} pos={`30% 15%`} />
                </div>
        </div>
    )
}

export default Misc;