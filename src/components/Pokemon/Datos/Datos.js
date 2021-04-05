import './Datos.css';

const Datos = ({ genero, descripcion, grupohuevo, grupociclo, amistad, color, dosgrupos}) => {
    return (
        <div className="content-datos">
            <p className="genero">{genero}</p>
            { descripcion !== "" 
            ? <p className="descripcion">{descripcion}</p> 
            : <p className="descripcion">Descripción no encontrada</p> }
            <div className="data-box">
                <p>Grupo Huevo: <span>{grupohuevo}</span></p>
                { dosgrupos ? <p>Grupo Ciclo: <span>{grupociclo}</span></p> : null }
                <p>Amistad: <span>{amistad}</span></p>
                <p>Color: <span>{color}</span></p>
            </div>
        </div>
    );
}

export default Datos;