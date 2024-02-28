import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState, useContext } from "react";
import './custom.css';
import FinJuego from "./FinJuego";

const Juego = () => {
        
    const [jugada1, setJugada1] = useState("");
    const [jugada2, setJugada2] = useState("");
    const [resultado, setResultado] = useState("");
    const [finalizar, setFinalizar] = useState("");
    
    
    const Jugar = async (e) => {
        const response = await fetch("jugar/jugada", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ Jugador1: jugada1, Jugador2: jugada2 })
        })

        if (response.ok) {
            const data = await response.json();
            setResultado(data.summary);
        }
    }

    const volverAJugar = async (e) => {        
        setJugada1("");
        setJugada2("")
        setResultado("");
    }    

    useEffect(() => {
        Jugar();
    }, [jugada1, jugada2])

    if (finalizar === "") {

        if (resultado === "") {
            return (
                <div className="container p-4 vh-100">
                    <h2>Aplicaci&oacute;n PAPEL - PIEDRA - TIJERAS</h2>

                    <div className="row mt-4" style={
                        {
                            border: '2px solid black'
                        }
                    }>
                        <h3>Jugador 1</h3>
                        <div className="col-sm-3"><img className="pointer" width="150px" onClick={() => setJugada1("piedra")} src={require('./assets/Piedra.jpg')} /> </div>
                        <div className="col-sm-3"><img className="pointer" width="150px" onClick={() => setJugada1("papel")} src={require('./assets/Papel.jpg')} /> </div>
                        <div className="col-sm-3"><img className="pointer" width="150px" onClick={() => setJugada1("tijera")} src={require('./assets/Tijera.jpg')} /> </div>
                        <label>Selecci&oacute;n: </label> <label id="labelUser1">{jugada1}</label>
                    </div>

                    <div className="row mt-4" style={
                        {
                            border: '2px solid black'
                        }
                    }>
                        <h3>Jugador 2</h3>
                        <div className="col-sm-3"><img className="pointer" width="150px" onClick={() => setJugada2("piedra")} src={require('./assets/Piedra.jpg')} /> </div>
                        <div className="col-sm-3"><img className="pointer" width="150px" onClick={() => setJugada2("papel")} src={require('./assets/Papel.jpg')} /> </div>
                        <div className="col-sm-3"><img className="pointer" width="150px" onClick={() => setJugada2("tijera")} src={require('./assets/Tijera.jpg')} /> </div>
                        <label>Selecci&oacute;n: </label> <label id="labelUser2">{jugada2}</label>
                    </div>
                </div>

            );
        }
        else {
            return (
                <div className="container p-4 vh-100">
                    <h2>Aplicaci&oacute;n PAPEL - PIEDRA - TIJERAS</h2>
                    <div className="row mt-4" style={
                        {
                            border: '2px solid black'
                        }
                    }>
                        <h2>{resultado}</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"> Pulse para volver a jugar o para finalizar.</div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <button className="btn btn-success" onClick={() => volverAJugar()} >VOLVER A JUGAR</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-success" onClick={() => setFinalizar("salir")} >FINALIZAR</button>
                        </div>
                    </div>                    
                </div>
            );
        }
    }
    else {
        <FinJuego />
    }
    
};

export default Juego;