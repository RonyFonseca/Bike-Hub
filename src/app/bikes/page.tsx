'use client'; 

import Menu from '@/Components/Menu/Menu';

import style from './bikes.module.css';

import Image from 'next/image';

import Status from '@/Components/Status/Status';

import CardSquare from '../_components/Cards/CardSquare/CardSquare';

import Footer from '@/Components/Footer/Footer';

import { useState } from 'react';
import { Bike } from '@/types/Bike';

import { EstadoGeral } from '@/types/EstadoGeral';

import { useRouter } from 'next/navigation';

export default function Bikes(){

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

        const [bikeSelected, setBikeSelected] = useState<Bike>(data[0]);

        const navigate = useRouter(); 

        const calcState = (estadoGeral: EstadoGeral):number => {  
            const soma = Object.values(estadoGeral).reduce((acc, value) => acc + value, 0);
            return Math.round(soma / Object.keys(estadoGeral).length); 
        }

    return(
        <div className={style.bikes_container}>
            <div className={style.menu_container}>
                <Menu />
            </div>

            <main className={style.main}>
                <div className={style.content_container}>
                    <div className={style.menu}>
                        <button className={style.create_button} onClick={() => navigate.push("/bikes/create")}>+</button>
                        <div className={style.information}>
                            <h2>{bikeSelected.name}</h2>
                            <ul>
                                <li>Data de criação: {bikeSelected.dataCriacao}</li>
                                <li>Dono:</li>
                                <li>Status: <span className={calcState(bikeSelected.estadoGeral) > 60? style.bom : calcState(bikeSelected?.estadoGeral) > 30? style.meio_termo : style.ruim}></span></li>
                            </ul>
                        </div>
                        <div className={style.buttons}>
                            <button  onClick={() => navigate.push(`bikes/edit/${bikeSelected.id}`)}><i className="bi bi-pencil-square"></i></button>
                            <button onClick={() => navigate.push(`bikes/repair/${bikeSelected.id}`)}><i className="bi bi-tools"></i></button>
                            <button><i className="bi bi-trash3"></i></button>
                            <button onClick={() => navigate.push(`bikes/historical/${bikeSelected.id}`)}><i className="bi bi-clipboard"></i></button>
                        </div>
                    </div>
                    <div className={style.image_container}>
                        <Image src={bikeSelected.imagePath || ""} alt="Bike Image" width={500} height={500} />
                    </div>
                    <div className={style.status_container}>
                        <Status freios={bikeSelected.estadoGeral.freios} pneus={bikeSelected.estadoGeral.pneus} corrente={bikeSelected.estadoGeral.corrente} amortecedor={bikeSelected.estadoGeral.amortecedor} assento={bikeSelected.estadoGeral.assento} pedal={bikeSelected.estadoGeral.pedal} carcaça={bikeSelected.estadoGeral.carcaça} />
                    </div>
                </div>
                <div className={style.registered_bikes}>
                    <h2>Suas bikes cadastradas</h2>
                    <div>
                        {data.map((bike) => (
                            <CardSquare key={bike.id} bike={bike} onClick={() => setBikeSelected(bike)} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}