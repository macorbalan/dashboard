import './table.css'
import { PlayArrow, CheckCircle, RemoveCircle,Dangerous } from '@mui/icons-material'

export default function Table(LISTADO) {





  return (
    <div className='Table'>
      <div className="tableContainer">
        <div className="tableTitle">
          Ejecucion de dags
        </div>
        <div className="tableBody">
          <table className="tableContainer">
            <tr className="tableTr">
              <th className="tableTh">DAG</th>
              <th className="tableTh">Estado</th>
              <th className="tableTh">Owner</th>
              <th className="tableTh">Ejecutar</th>
              <th className="tableTh">Frenar</th>
            </tr>

            {
              LISTADO.LISTADO.dag_list.map(salida => {
                { console.log(salida) }
                return (
                  <tr className="tableTr">
                    <td className="tableTd"> {salida.dag_id}</td>
                    <td className="tableTd"> {salida.is_active ? <CheckCircle style={{ color: "green" }} /> : <RemoveCircle style={{ color: "red" }} />}</td>
                    <td className="tableTd"> {salida.owners.map(owners => { return (owners) + " " })}</td>
                    <td className="tableTd"><PlayArrow className="playBTN" style={{color:"rgb(122, 248, 200)"}} /></td>
                    <td className="tableTd"><Dangerous className="stopBTN" style={{color:"#f7737c"}}/></td>

                  </tr>
                )
              })}

          </table>
        </div>
      </div>
    </div>
  )

}
/*
 const Button = ({ type }) => {
    return <button className={'OutDag ' + type} > {type} </button>
  }

                    <td className="tableTd"> <Button type="Sucsess" /></td>

                    */