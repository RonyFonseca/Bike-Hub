'use client';

import Image from "next/image";
import BarraP from "@/Components/BarraPorcentagem/BarraP";
import style from "./SimpleCard.module.css";

import { Bike } from "@/types/Bike";
import { EstadoGeral } from "@/types/EstadoGeral";


export default function SimpleCard(props: {bike: Bike, onclick: () => void}) {

    const calcState = (estadoGeral: EstadoGeral):number => {  
      const soma = Object.values(estadoGeral).reduce((acc, value) => acc + value, 0);
      return Math.round(soma / Object.keys(estadoGeral).length); 
    }
    
  return (
    <div className={style.card} onClick={() => props.onclick()}>
        <div>
           <Image src={props.bike.imagePath} alt="Map Image" width={100} height={100} />
        </div>
        <div className={style.info}>
            <h4>{props.bike.name}</h4>
            <div>
                <div className={style.estado_geral}>
                    <p>Estado geral</p>
                    <p>{calcState(props.bike.estadoGeral)}%</p>
                </div>
                <BarraP value={calcState(props.bike.estadoGeral)} />
                <div>
                    <p><i className="bi bi-calendar"></i> {props.bike.dataCriacao}</p>
                </div>
            </div>
        </div>
    </div>
  );
}