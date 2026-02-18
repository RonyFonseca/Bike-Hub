'use client'; 

import Menu from "@/Components/Menu/Menu";
import Image from "next/image";
import StatusRange from "@/Components/StatusRange/StatusRange";
import Link from "next/link";
import style from "./create.module.css";
import Footer from "@/Components/Footer/Footer";

export default function Create(){
    return (
        <div className={style.create_a_bike}>
            <Menu />
            <main className={style.create_a_bike_main}>
                <div className={style.menu_left}>
                    <div className={style.select_state}>
                        <h4>Selecionar Estado</h4>
                        <form>
                            <select required className={style.width_complet}>
                                <option value="Novo">Nova</option>
                                <option value="Novo">Velha</option>
                            </select>
                        </form>
                    </div>
                    <div>
                        <h4>Nome ou modelo</h4>
                        <form>
                            <input type="text" placeholder="Nome ou modelo" className={style.width_complet}/>
                        </form>
                    </div>
                    <div>
                        <h4>Responsável pela criação</h4>
                        <form>
                            <input type="text" placeholder="Dono" className={style.width_complet}/>
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
                    <Image src="/Bikes-png/BikeSemCor.png" alt="Bike Image" width={400} height={500} />
                </div>
                <div className={style.status}>
                    <StatusRange />
                </div>
            </main>
            <Footer />
        </div>
    )
}