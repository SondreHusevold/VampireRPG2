import React from 'react';
import Background from './BG2.webm';
import Logo from './Logo.png';
import styles from './haven.module.css';

function Haven() {
    return (
        <div className={`${styles.frontVideo}`}>
            <video playsInline={true} autoPlay={true} muted loop id="background">
                <source src={Background} />
            </video>

            <img src={Logo} alt={`VtM: Miami 2 logo`}/>
      </div>
    )
}

export default Haven;