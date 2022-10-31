import Botao from "../button";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";


export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p>Escolha um card e inicie o crônometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>

            <Botao>Iniciar</Botao>
        </div>
    )
}