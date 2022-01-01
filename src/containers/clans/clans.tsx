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
            {
                clans.map((clan, index) => {
                    return (
                        <button 
                            onClick={() => goToClan(clan.name)}
                            className={`${clan.playerClan ? styles.playerClan : styles.npcClan}`}
                        >
                            {clan.name} <p><img className={styles.gridClanLogo} src={clan.logo} /></p>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Clans;