import './listado.css'

import { SmsFailed, CheckCircle, RemoveCircle } from '@mui/icons-material'
import CircularProgress from '@mui/material/CircularProgress';

export default function Listado(LISTADO) {
    return (
        <div className='Listado'>

            <div className="listadoChico">
                <div className="tituloListadoChico">
                    Ejecuciones de DAGS
                </div>
                <ul className="ListContainer">
                    {LISTADO.LISTADO.dag_runs.map(salida => {
                        return (
                            <li className="ListItem">
                                <div className="listName">
                                    {salida.dag_id}
                                </div>

                                <div className="listEstado">
                                    <div className="estadoH">
                                    {(function () {
                                            switch (salida.state) {
                                                case 'success':
                                                    return (
                                                        <p style={{ color: "green" }}>Exitoso</p>
                                                    );
                                                case 'running':
                                                    return (
                                                        <p style={{ color: "orange" }}>Ejecutandose</p>
                                                    );
                                                case 'fail':
                                                    return (
                                                        <p style={{ color: "red" }}>Falló</p>
                                                    );
                                                case 'queued':
                                                    return (
                                                        <p style={{ color: "blue" }}>En cola de trabajo</p>
                                                    );

                                                default:
                                                    break;
                                            }
                                        })()}

                                    </div>
                                    <div className="estadoB">
                                        {(function () {
                                            switch (salida.state) {
                                                case 'success':
                                                    return (
                                                        <CheckCircle style={{ color: "green" }} />
                                                    );
                                                case 'running':
                                                    return (
                                                        <CircularProgress color="warning" />
                                                    );
                                                case 'fail':
                                                    return (
                                                        <SmsFailed style={{ color: "red" }} />
                                                    );
                                                case 'queued':
                                                    return (
                                                        <CircularProgress color="primary" />
                                                    );

                                                default:
                                                    break;
                                            }
                                        })()}

                                    </div>
                                </div>
                            </li>
                        )

                    })}


                </ul>
            </div>
        </div>
    )
}
/*
                                <div className="listDescription">
                                    {salida.description ? salida.description : "Sin descripcion"}
                                </div>

                                Se saca de la vista la descripcion para la demo por un tema de 
                                vista
*/