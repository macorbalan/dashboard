import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({Titulo, data, puntero,grid }) {
    
    return (
        <div className='Chart'>
            <div className="chartItem">
                <div className="chartTitle">
                    {Titulo}
                </div>
                <div className="chartBody">
                    <ResponsiveContainer width="100%" aspect={4 / 1}>
                        <LineChart data={data}>
                            <XAxis dataKey="name" stroke='#5550bd' />
                            <Line type="monotone" dataKey={puntero} stroke='#000' />
                            <Tooltip />
                            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/> }
                            <Legend/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    )
}


/*
    Recibo parametros 
    Titulo:      Que va en el gráfico
    data:        Json para parsear
    puntero:     valor que se toma en el chart
    grid:        Maneja aspectos


    Hay que modificar puntero para mas de 1 puntero - ver en el futuro
*/