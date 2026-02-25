'use client'

import { useParams } from "next/navigation"
import Menu from "@/Components/Menu/Menu";
import Status from "@/Components/Status/Status";
import Image from "next/image";
import { Bike } from "@/types/Bike";
import { EstadoGeral } from "@/types/EstadoGeral";
import { useState} from "react";
import style from "./historical.module.css";
import Footer from "@/Components/Footer/Footer";


export default function Historical(){
    const id = Number(useParams().id); 
    const [ativo,setAtivo] = useState<number | null>(null); 
    const [data, setData] = useState([
                {
                id: 1,
                name: "TrailForce",
                imagePath: "/Bikes-png/pngwing.com.png",
                estadoGeral: {
                    freios: 40,
                    pneus: 95,
                    corrente: 60,
                    amortecedor: 50,
                    assento: 90,
                    pedal: 70,
                    carcaça: 40
                },
                dataCriacao: "2023-10-01",
                },
                {
                id: 2,
                name: "MountainX",
                imagePath: "/Bikes-png/bike2.png",
                estadoGeral: {
                    freios: 20,
                    pneus: 10,
                    corrente: 50,
                    amortecedor: 20,
                    assento: 55,
                    pedal: 15,
                    carcaça: 5
                },
                dataCriacao: "2023-09-15",
                },
                {
                id: 3,
                name: "CityCruiser",
                imagePath: "/Bikes-png/bike3.png",
                estadoGeral: {
                    freios: 90,
                    pneus: 85,
                    corrente: 70,
                    amortecedor: 80,
                    assento: 95,
                    pedal: 80,
                    carcaça: 60
                },
                dataCriacao: "2023-08-20",
                },
            ]);
    
            const [bikeSelected, setBikeSelected] = useState<Bike>(data.filter((bike) => bike.id == id)[0]); 
            const calcState = (estadoGeral: EstadoGeral):number => {  
                const soma = Object.values(estadoGeral).reduce((acc, value) => acc + value, 0);
                return Math.round(soma / Object.keys(estadoGeral).length); 
            }
            
            const togle = (id:number) => { 
                setAtivo(ativo == id ? null : id); 
            }
    return(
        <main className={style.historical}>
            <div className={style.menu}>
                <Menu />
            </div>
            <div className={style.historical_content}>
                <div className={style.historical_content_aside}>
                    <div>
                        <div className={style.historical_content_aside_list}>
                            <h2>{bikeSelected.name}</h2>
                            <ul>
                                <li>Data de criação: {bikeSelected.dataCriacao}</li>
                                <li>Dono:</li>
                                <li>Status: <span className={calcState(bikeSelected.estadoGeral) > 60? style.bom : calcState(bikeSelected?.estadoGeral) > 30? style.meio_termo : style.ruim}></span></li>
                            </ul>
                        </div>
                        <Image src={bikeSelected.imagePath} width={300} height={300} alt="bike"/>
                        <Status />
                    </div>
                </div>
                <div className={style.historical_list}>
                    <h2>Histórico</h2>
                    <div className={style.historical_cards}>
                        <div className={style.historical_item} onClick={() => togle(1)}>
                            <div>
                                <i className="bi bi-caret-up-fill"></i>
                                <p>00/00/0000</p>
                            </div>
                            <div className={ativo == 1? style.sub_informations_ativo : style.sub_informations_desligado}>
                                <h4>Informações:</h4>
                                <p>Foi efetuada a troca do assento.</p>
                                <p><span className="bolder">Responsável:</span> rony</p>
                            </div>
                        </div>
                        <div className={style.historical_item} onClick={() => togle(2)}>
                            <div>
                                <i className="bi bi-caret-up-fill"></i>
                                <p>00/00/0000</p>
                            </div>
                            <div className={ativo == 2 ? style.sub_informations_ativo : style.sub_informations_desligado}>
                                <h4>Informações:</h4>
                                <p>Foi efetuada a troca do assento.</p>
                                <p><span className="bolder">Responsável:</span> rony</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}