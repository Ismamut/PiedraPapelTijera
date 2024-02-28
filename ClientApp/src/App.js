import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState, useContext } from "react";
import './custom.css';
import Juego from "./Juego";

const App = () => {

    const [jugar, setJugar] = useState(false);
           
    if (jugar)
        return (
            <Juego />
        );
    else
        return (
            <div className="container p-4 vh-100">
                <h2>Aplicaci&oacute;n PAPEL - PIEDRA - TIJERAS</h2>
                <div className="row">
                    <div className="col-sm-12"> Pulse Iniciar para empezar a jugar.</div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12">
                        <button className="btn btn-success" onClick={() => setJugar(!jugar)} >INICIAR</button>
                    </div>
                </div>
            </div>
        );
}

export default App;