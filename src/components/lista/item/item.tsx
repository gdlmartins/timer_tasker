import style from "../style.module.scss";
import { task } from "../../../interfaces/tasks";

export function Item({ task, time }: task) {
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
};
