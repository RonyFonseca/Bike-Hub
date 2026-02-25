'use client'; 

import Menu from "@/Components/Menu/Menu";
import Image from "next/image";
import StatusRange from "@/Components/StatusRange/StatusRange";
import Link from "next/link";
import style from "./edit.module.css";
import Footer from "@/Components/Footer/Footer";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Bike } from "@/types/Bike";

export default function Create(){
    const id = Number(useParams().id); 
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


    return (
        <div className={style.create_a_bike}>
            <div className={style.menu}>
                <Menu />
            </div>
            <main className={style.create_a_bike_main}>
                <div className={style.menu_left}>
                    <div className={style.select_state}>
                        <h4>Selecionar Estado</h4>
                        <form>
                            <select required className={style.width_complet}>
                                <option value="Novo">Nova</option>
                                <option value="Velha">Velha</option>
                            </select>
                        </form>
                    </div>
                    <div>
                        <h4>Nome ou modelo</h4>
                        <form>
                            <input 
                            type="text" 
                            placeholder="Nome ou modelo" 
                            value={bikeSelected?.name || ""}
                                    onChange={(e) =>
                                        setBikeSelected({
                                        ...bikeSelected,
                                        name: e.target.value,
                                        })
                                    }
                            className={style.width_complet}/>
                        </form>
                    </div>
                    <div>
                        <h4>Responsável pela criação</h4>
                        <form>
                            <input type="text"
                            placeholder="Dono" 
                            className={style.width_complet}/>
                        </form>
                    </div>
                    <div className={style.informations}>
                        <p>Em caso de criações que fujam do conceito da aplicação sua conta estará sujeita a ban <Link href="#">mais informações.</Link> </p>
                        <div>
                            <button>Salva</button>
                            <button>Cancelar</button>
                        </div>
                    </div>
                </div>
                <div className={style.set_image_container}>
                    <div>
                        <label htmlFor="fileInput" className={style.img}>
                            <i className="bi bi-card-image"></i>
                        </label>

                        <input 
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                        />
                    </div>
                    <Image src={bikeSelected.imagePath} className={style.imageBike} alt="Bike Image" width={500} height={500} />
                </div>
                <div className={style.status}>
                    <StatusRange
                        freios={bikeSelected?.estadoGeral.freios}
                        pneus={bikeSelected?.estadoGeral.pneus}
                        corrente={bikeSelected?.estadoGeral.corrente}
                        amortecedor={bikeSelected?.estadoGeral.amortecedor}
                        assento={bikeSelected?.estadoGeral.assento}
                        pedal={bikeSelected?.estadoGeral.pedal}
                        carcaça={bikeSelected?.estadoGeral.carcaça}
                    />
                </div>
            </main>
            <Footer />
        </div>
    )
}