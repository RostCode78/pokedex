import './Stats.css';

const Stats = ({ habilidad1, habilidad2, habilidad3, habilidad4, hp, atk, satk, def, sdef, spd }) => {
    
    return (
        <div className="content-stats">
            <div className="box-habilidades">
                <h2>Habilidades</h2>
                { habilidad4 === ''
                ?
                    <p>{habilidad1} - {habilidad2} - {habilidad3} - {habilidad4}</p>
                : 
                    ( habilidad3
                    ?
                        <p>{habilidad1} - {habilidad2} - {habilidad3}</p>
                    :
                        <p>{habilidad1} - {habilidad2}</p>
                    )
                }
            </div>
            <div className="box-stats">
                <p className="stat">HP: <span>{hp}</span></p>
                <p className="stat">ATK: <span>{atk}</span></p>
                <p className="stat">SATK: <span>{satk}</span></p>
                <p className="stat">DEF: <span>{def}</span></p>
                <p className="stat">SDEF: <span>{sdef}</span></p>
                <p className="stat">SPD: <span>{spd}</span></p>
            </div>
        </div>
    );
}

export default Stats;