import styles from './clans.module.css';
import { clans } from '../../services/clanService';
import { useNavigate } from 'react-router-dom';

function Clans() {
    const navigate = useNavigate();

    function goToClan(clan: string) {
        navigate(`${clan}`, {})
    }

    return (
        <div className={styles.clansGrid}>
            <h1>Clans</h1>
            {
                clans.map((clan, index) => {
                    return (
                        <button 
                            onClick={() => goToClan(clan.name)}
                            className={`${clan.playerClan ? styles.playerClan : styles.npcClan}`}
                        >
                            <h1 className={`vtm-clan-icon ${styles.gridClanLogo}`}>{clan.logo}</h1>
                            <p>{clan.name}</p>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Clans;