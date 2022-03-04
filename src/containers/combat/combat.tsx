import styles from './combat.module.css';

function Combat() {
    return (
        <>
            <h1>Combat</h1>
            <div className={styles.combatGrid}>
                <button>
                    <h1 className='nf nf-fa-sort_numeric_asc'/>
                    <h3>Combat Stages</h3>
                </button>
                <button>
                    <h1 className={`nf nf-mdi-dice_d10`}></h1>
                    <h3>Combat {'&'} damage types</h3>
                </button>
                <button>
                    <h1 className='nf nf-mdi-heart_half_full'></h1>
                    <h3>Health</h3>
                </button>
                <button>
                    <h1 className='nf nf-mdi-karate'/>
                    <h3>Maneuvers</h3>
                </button>
                <button>
                    <h1 className='nf nf-fa-low_vision'/>
                    <h3>Status Effects</h3>
                </button>
                <button>
                    <h1 className={`nf nf-fae-shirt`}></h1>
                    <h3>Equipment Charts</h3>
                </button>
            </div>
        </>
    )
}

export default Combat;