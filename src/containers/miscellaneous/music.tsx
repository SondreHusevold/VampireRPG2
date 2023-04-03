import { Link } from 'react-router-dom';
import styles from './music.module.css';
import pageStyles from '../common/pages.module.css';
import picture from './music.jpg';
import Picture from '../common/picture';
import { useEffect } from 'react';

function Music() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.musicWrap}`}>
        <h2 className={`${styles.musicHeader} ${pageStyles.headerTop}`}>Music</h2>
        <Picture img={picture} credit={`Angel Ganev`} desc="Newly turned" link='https://www.artstation.com/angelganev' mobile={true} pos={`30% 15%`} />
        <div className={styles.musicWrapper}>
            <div className={`${styles.musicGrid}`}>
                <a target={`_blank`} href="https://open.spotify.com/playlist/4GefNNrSTTLUdMhJu9RHLH?si=3470345e871943cf">
                    <h1 className={`nf nf-mdi-spotify`}/>
                    <h4>Action</h4>
                </a>
                <a target={`_blank`} href="https://open.spotify.com/playlist/1vv7xcpss6K5dYmai4oP3c?si=315eb24c4dfd4392">
                    <h1 className={`nf nf-mdi-spotify`}/>
                    <h4>Streets</h4>
                </a>
                <a target={`_blank`} href="https://open.spotify.com/playlist/4eJnjvFxNYQjkDLnz0KUHX?si=e584b64bc3c94584">
                    <h1 className={`nf nf-mdi-spotify`}/>
                    <h4>Tense</h4>
                </a>
                <a target={`_blank`} href="https://open.spotify.com/playlist/3u1sO5oFH20XAsol9gt88t?si=b8d87377fdaa49ca">
                    <h1 className={`nf nf-mdi-spotify`}/>
                    <h4>Ambient</h4>
                </a>
                <a target={`_blank`} href="https://open.spotify.com/playlist/5gsj1uo5HTH3YMwnM2sR0r?si=5919e721969f4b7e">
                    <h1 className={`nf nf-mdi-spotify`}/>
                    <h4>Club</h4>
                </a>
                <a target={`_blank`} href="https://open.spotify.com/playlist/2XMMdTA6BpLFThaUL31677?si=6a46b96713ea4441">
                    <h1 className={`nf nf-mdi-spotify`}/>
                    <h4>Bar</h4>
                </a>
                <a target={`_blank`} href="https://open.spotify.com/playlist/07lKP06r25F6y2VdxDRtYJ?si=8497e7735a794649">
                    <h1 className={`nf nf-mdi-spotify`}/>
                    <h4>Special</h4>
                </a>
            </div>
            <Picture img={picture} credit={`Angel Ganev`} desc="Newly turned" link='https://www.artstation.com/angelganev' mobile={false} pos={`30% 15%`} />
        </div>
    </div>
    )
}

export default Music;