import React , {useId} from "react";
import { task } from "../../interfaces/tasks";
import { Item } from "./item/item";
import style from "./style.module.scss";




const tarefas: task[] = [
    {
        task: "React",
        time: "02:00:00"
    },
    {
        task: "JavaScript",
        time: "01:30:00"
    }
]

function Lista() {
 

    return (
        <aside className={style.listaTarefas}>
            <h2>
                Studying
            </h2>
            <ul>
                   {tarefas.map((item , key)=>(
                       <Item
                       key={key}
                       {...item}
                       />
                      
                       ))}
            </ul>
        </aside>
    )

}

export default Lista;