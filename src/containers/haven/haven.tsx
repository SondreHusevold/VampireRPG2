import React from 'react';
import Background from './BG2.webm';
import Logo from './Logo.png';
import LogoWithoutNumber from './LogoNoNumber.png';
import OnlyNumber from './LogoOnlyNumber.png';
import styles from './haven.module.css';

function Haven() {
    return (
        <div className={`${styles.frontVideo}`}>
            <video playsInline={true} autoPlay={true} muted loop id="background">
                <source src={Background} />
            </video>

            {
                window.screen.width >= 1300
                ? <img src={Logo} alt={`VtM: Miami 2 logo`}/>
                : <div className={styles.mobile}>
                    <img className={styles.logo1} src={LogoWithoutNumber} alt={`VtM: Miami logo`}/>
                    <img className={styles.logo2} src={OnlyNumber} alt={`2`}/>
                </div>
            }
            
      </div>
    )
}

export default Haven;