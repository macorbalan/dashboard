import Chart from "../../components/Charts/Chart"
import Table from "../../components/Table/Table"
import HomeContent from "../../components/HomeContents/HomeContent"
import "./home.css"
import { DagData } from "./Datachart"
import Listado from "../../components/Listado/Listado"
import { DagList } from '../../components/DataSource/daglist'
import {DagRunList} from '../../components/DataSource/dagrunlist'
export default function Home() {
    return (
        <div className='Home'>
            <HomeContent />
            <div className="contenidoHome">
                <div className="Widgets">
                    <Table LISTADO ={DagList}/>
                    <Listado LISTADO={DagRunList}/>
                </div>


               

            </div>
        </div>
    )
}



/*

    Componentes:
                _ Charts:
                         <Chart Titulo="ejemploChart" data={DagData} grid puntero="Dags Activos" />
                         Nos permite colocar un grafico, pasando un arrelgo con la info necesaria.

*/
