import React from "react";
import Botao from "../button";

import style from  "./style.module.scss";


class Formulario extends React.Component{

    render(){
        return (
            <form className={style.novaTarefa}>
             <div className={style.inputContainer}>
                 <label htmlFor="task">
                     Add a new task
                 </label>

                 <input
                 name="task"
                 id="task"
                 placeholder="Write your task here..."
                 />
                 <label htmlFor="time">
                     timer
                 </label>
                 <input
                 name="time"
                 type="time"
                 step="1"
                 id="item"
                 min="00:00:00"
                 max="01:30:00"

                 />

             </div>
             <Botao>
             Adicionar
             </Botao>




            </form>
        )

    }
}
export default Formulario;