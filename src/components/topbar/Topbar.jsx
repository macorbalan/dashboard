import { Home, Leaderboard } from '@mui/icons-material';
import "./topbar.css"
function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img className="logo" src="isotipo.png" alt="" />
                </div>
                <div className="topRight">
                    <div className="topbarOptions">
                        <Home />
                    </div>
                    <div className="topbarOptions">
                        <Leaderboard />
                    </div>
                    <div className="topbarOptions">
                        <img src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="topAvatar" />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar;


/*Opciones 

Waring: 
    <span className="topIconAdvice">3</span> 
        Nos permite poner
        un warning para saber si tenemos notificaciones, aparecera
        sobre el icono que se coloque.

*/ 