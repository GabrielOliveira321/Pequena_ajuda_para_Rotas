import { Link } from "react-router-dom";


function Err() {
    return(
        <div>
            <h2>Ops parece que essa pagina não existe</h2>

            <span>Encontramos essas paginas aqui!</span>
                <br/>
            <Link to="/">Home</Link> 
                <br/>
            <Link to="/soma">Sobre</Link>
                <br/>
            <Link to="/contato">Contato</Link>
        </div>
    );
}

export default Err;