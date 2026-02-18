'use client';
import style from "./BarraP.module.css";

export default function BarraP(props: {value: number}) {

    const cor =
        props.value >= 90
        ? style.barra_azul
        : props.value > 65
        ? style.barra_verde
        : props.value > 35
        ? style.barra_amarela
        : props.value > 0
        ? style.barra_vermelha
        : "";

    return (
        <div className={style.barraPorcentagem}>
            <div className={cor} style={{width: `${props.value}%`}}></div>
        </div>
    );
}