import './homecontent.css'

export default function HomeContent() {
    return (
        <div className='ContenidoHOME'>
            <div className="dashboardTitle">
                HealthServer
            </div>
            <div className="healthDashboard">
                  <div className="dashboardContent">
                    <div className="dashboardItemTitle">
                        Airflow
                        
                    </div>
                    <div className="dashboardItem">
                        Dags creados:
                        <div className="dashboarditemcontent">350</div>
                    </div>
                    <div className="dashboardItem">
                        Dags Activos:
                        <div className="dashboarditemcontent">220</div>
                    </div>
                    <div className="dashboardItem">
                        Dags Schedulers:
                        <div className="dashboarditemcontent">30</div>
                    </div>
                </div>

                <div className="dashboardContent">
                    <div className="dashboardItemTitle">
                        Celula
                        <div className="dashboarditemcontent">Frame</div>
                    </div>
                    <div className="dashboardItem">
                        Dags creados:
                        <div className="dashboarditemcontent">350</div>
                    </div>
                    <div className="dashboardItem">
                        Dags Activos:
                        <div className="dashboarditemcontent">220</div>
                    </div>
                    <div className="dashboardItem">
                        Dags Schedulers:
                        <div className="dashboarditemcontent">30</div>
                    </div>
                </div>
                <div className="dashboardContent">
                    <div className="dashboardItemTitle">
                        Celula
                        <div className="dashboarditemcontent">Acceso Fijo</div>
                    </div>
                    <div className="dashboardItem">
                        Dags creados:
                        <div className="dashboarditemcontent">350</div>
                    </div>
                    <div className="dashboardItem">
                        Dags Activos:
                        <div className="dashboarditemcontent">220</div>
                    </div>
                    <div className="dashboardItem">
                        Dags Schedulers:
                        <div className="dashboarditemcontent">30</div>
                    </div>
                </div>

            </div>
        </div >
    )
}
