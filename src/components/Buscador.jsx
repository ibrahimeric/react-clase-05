const Buscador = (props) => {

    const { setBuscado } = props;

    const handleChange = (e) => {
        console.log(e.target.value)
        const busqueda = e.target.value;
        setBuscado(busqueda)
    }

    return ( 
        <>
            <input 
                type="text" 
                onChange={handleChange}
                placeholder="buscar personaje"
            />
        </>
     );
}
 
export default Buscador;
