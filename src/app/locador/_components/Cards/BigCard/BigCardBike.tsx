'use client'

import Image from "next/image";
import Status from "@/Components/Status/Status";
import style from "./BigCard.module.css";

import { Bike } from "@/types/Bike";

type SimpleCardProps = {
    bike: Bike;
}

export default function BigCardBike({bike}: SimpleCardProps) {
  return (
    <div className={style.card_bike}>
        <div className={style.image_bike}>
        <h4>{bike.name}</h4>
        <Image src={bike.imagePath} alt="Bike Image" width={200} height={200} />
        </div>
        <div className={style.status_section}>
        <h4>Status da bike</h4>
        <div>
            <Status freios={bike.estadoGeral.freios} pneus={bike.estadoGeral.pneus} corrente={bike.estadoGeral.corrente} amortecedor={bike.estadoGeral.amortecedor} assento={bike.estadoGeral.assento} pedal={bike.estadoGeral.pedal} carcaça={bike.estadoGeral.carcaça} />
        </div>
        <p className={style.description}>sua bike necessita de uma reforma para poder roda novamente com segurança.</p>
        </div>
    </div>
  )}