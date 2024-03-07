const ListaPersonajes = (props) => {
    const { personajes } = props;



    return (

        <div className="contenedor">
            {personajes.map((personaje) =>
                <div className="tarjeta" key={personaje.id}>
                    
                    <img src={personaje.image} />
                    
                    <h2> {personaje.name} </h2>
                    
                    <p> {personaje.species} </p>
                    
                </div>
            )}
        </div>
        
    );
}

export default ListaPersonajes;