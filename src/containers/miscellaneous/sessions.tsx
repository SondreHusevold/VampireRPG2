import { Link } from 'react-router-dom';
import styles from './music.module.css';
import pageStyles from '../common/pages.module.css';
import picture from './sessions.jpg';
import Picture from '../common/picture';
import { useEffect } from 'react';

function Sessions() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.musicWrap}`}>
        <h2 className={`${styles.musicHeader} ${pageStyles.headerTop}`}>Sessions</h2>
        <Picture img={picture} credit={`Alex Chow`} desc="Newly turned" link='https://www.artstation.com/alexchow' mobile={true} pos={`30% 15%`} />
        <div className={styles.musicWrapper}>
            <div className={`${styles.musicGrid}`}>
                <a target={`_blank`} href="/assets/sessions/Session1.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 1</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session2.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 2</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session3.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 3</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session4.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 4</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session5.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 5</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session6.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 6</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session7.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 7</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session8.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 8</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session9.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 9</h4>
                </a>
                <a target={`_blank`} href="/assets/sessions/Session10.txt">
                    <h1 className={`nf nf-mdi-book`}/>
                    <h4>Session 10</h4>
                </a>
            </div>
            <Picture img={picture} credit={`Alex Chow`} desc="Newly turned" link='https://www.artstation.com/alexchow' mobile={false} pos={`30% 15%`} />
        </div>
    </div>
    )
}

export default Sessions;