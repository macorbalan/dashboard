import React from 'react'
import "./sidebar.css"
import { TableView, Apps, Api,AppRegistration,Article, FileCopy,LibraryBooks, List,MenuBook,TableRows,Person,DeveloperMode,GitHub } from '@mui/icons-material';
export default function Sidebar() {
    return (
        <div className='Sidebar'>
            <div className="sideWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Herramientas</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarItem">
                            <TableView className='sidebarICON' />
                            Dasboard
                        </li>
                        <li className="sidebarItem">
                            <Api className='sidebarICON' />
                            Airflow
                        </li>
                        <li className="sidebarItem">
                            <AppRegistration className='sidebarICON' />
                            Editor Web
                        </li>
                        <li className="sidebarItem">
                            <Article className='sidebarICON' />
                            Formularios</li>
                    </ul>
                    <h3 className="sidebarTitle">Funconabilidades</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarItem">
                            <FileCopy className='sidebarICON' />
                            Comparacion de archivos
                        </li>
                        <li className="sidebarItem">
                            <FileCopy className='sidebarICON' />
                            Comparacion de backup
                        </li>
                        <li className="sidebarItem">
                            <TableView className='sidebarICON' />
                            Visualizador de BD
                        </li>
                        <li className="sidebarItem">
                            <List className='sidebarICON' />
                            Listado de DAGS</li>
                        
                    </ul>
                    <h3 className="sidebarTitle">Reportes</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarItem">
                            <MenuBook className='sidebarICON' />
                            Librerias instaladas

                        </li>
                        <li className="sidebarItem">
                            <TableRows className='sidebarICON' />
                            Inventario
                        </li>
                        
                    </ul>
                    <h3 className="sidebarTitle">Configuraciones</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarItem">
                            <Person className='sidebarICON' />
                            Perfil
                        </li>
                        <li className="sidebarItem">
                            <DeveloperMode className='sidebarICON' />
                            Entorno
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Documentacion</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarItem">
                            <LibraryBooks className='sidebarICON' />
                            Sphinx
                        </li>
                        <li className="sidebarItem">
                            <GitHub className='sidebarICON' />
                            Git
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
