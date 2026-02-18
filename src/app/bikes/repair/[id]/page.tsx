'use client'; 

import { useState } from "react";
import Menu from "@/Components/Menu/Menu";
import Status from "@/Components/Status/Status";
import style from "../../bikes.module.css";
import { Bike } from "@/types/Bike";
import { EstadoGeral } from "@/types/EstadoGeral";
import { useParams } from "next/navigation";
import Image from "next/image";



export default function Repair(){

  const params = useParams(); 

  const id = Number(params.id); 

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
    const [backup, setBackup] = useState<Bike>(data.filter((bike) => bike.id == id)[0]); 

    const [component, setComponent] = useState<object>({});

    const [build, setBuild] = useState<Array<string>>([]); 

    const calcState = (estadoGeral: EstadoGeral):number => {  
        const soma = Object.values(estadoGeral).reduce((acc, value) => acc + value, 0);
        return Math.round(soma / Object.keys(estadoGeral).length); 
    }

    const handleItem = (n: string) => {
      switch (n) {
        case "pneu": {
          const item = "bi bi-disc";

           setBuild(prev => {
              const existe = prev.includes(item);
              console.log(component)

              setBikeSelected(prevBike => ({
                ...prevBike,
                estadoGeral: {
                  ...prevBike.estadoGeral,
                  pneus: existe ? backup.estadoGeral.pneus : 100
                }
              }));

              if (existe) {
                return prev.filter(component => component !== item);
              }

              return [...prev, item];
            });

            break;
        }
        case "freio": {
          const item = "bi bi-capslock";

          setBuild(prev => {
            const existe = prev.includes(item);

              setBikeSelected(prevBike => ({
                ...prevBike,
                estadoGeral: {
                  ...prevBike.estadoGeral,
                  freios: existe ? backup.estadoGeral.freios : 100
                }
              }));

              if (existe) {
                return prev.filter(component => component !== item);
              }

              return [...prev, item];
          });

          break;
        }
        case "corrente": {
          const item = "bi bi-gear";

          setBuild(prev => {
            const existe = prev.includes(item);

              setBikeSelected(prevBike => ({
                ...prevBike,
                estadoGeral: {
                  ...prevBike.estadoGeral,
                  corrente: existe ? backup.estadoGeral.corrente : 100
                }
              }));

              if (existe) {
                return prev.filter(component => component !== item);
              }

              return [...prev, item];
          });

          break;
        }
        case "amortecedor": {
          const item = "bi bi-sort-up-alt";

          setBuild(prev => {
            const existe = prev.includes(item);

              setBikeSelected(prevBike => ({
                ...prevBike,
                estadoGeral: {
                  ...prevBike.estadoGeral,
                  amortecedor: existe ? backup.estadoGeral.amortecedor : 100
                }
              }));

              if (existe) {
                return prev.filter(component => component !== item);
              }

              return [...prev, item];
          });

          break;
        }
        case "assento": {
          const item = "bi bi-phone-landscape";

          setBuild(prev => {
            const existe = prev.includes(item);

              setBikeSelected(prevBike => ({
                ...prevBike,
                estadoGeral: {
                  ...prevBike.estadoGeral,
                  assento: existe ? backup.estadoGeral.assento : 100
                }
              }));

              if (existe) {
                return prev.filter(component => component !== item);
              }

              return [...prev, item];
          });

          break;
        }
        case "pedal": {
          const item = "bi bi-mouse3";

          setBuild(prev => {
            const existe = prev.includes(item);

              setBikeSelected(prevBike => ({
                ...prevBike,
                estadoGeral: {
                  ...prevBike.estadoGeral,
                  pedal: existe ? backup.estadoGeral.pedal : 100
                }
              }));

              if (existe) {
                return prev.filter(component => component !== item);
              }

              return [...prev, item];
          });

          break;
        }
        case "carcaca": {
          const item = "bi bi-alt";

          setBuild(prev => {
            const existe = prev.includes(item);

              setBikeSelected(prevBike => ({
                ...prevBike,
                estadoGeral: {
                  ...prevBike.estadoGeral,
                  carcaça: existe ? backup.estadoGeral.carcaça : 100
                }
              }));

              if (existe) {
                return prev.filter(component => component !== item);
              }

              return [...prev, item];
          });

          break;
        }
      }
  };

        
    return (
        <main className={style.rapair}>
            <Menu />
            <div className={style.repair_center_content}>
              <div className={style.content_container}>
                  <div className={style.menu}>
                      <div className={style.information}>
                          <h2>{bikeSelected.name}</h2>
                          <ul>
                              <li>Data de criação: {bikeSelected?.dataCriacao}</li>
                              <li>Dono:</li>
                              <li>Status: <span className={calcState(bikeSelected?.estadoGeral) >= 60? style.bom : calcState(bikeSelected?.estadoGeral) > 30? style.meio_termo : style.ruim}></span></li>
                          </ul>
                      </div>
                      {Object.values(bikeSelected.estadoGeral).some((valor) => valor < 50)?(
                        <div className={style.components_repair_options}>
                          <h3>Peças sujeitas a danificar:</h3>
                          {Object.entries(bikeSelected.estadoGeral).filter(([nome,valor]) => valor<50).map(([nome]) => (
                            <div key={nome}>
                              <i className="bi bi-exclamation-triangle"></i>
                              <p>{nome}</p>
                            </div>
                          ))}
                        </div>
                      ):""} 
                  </div>
                  <div className={style.image_container}>
                      <Image src={bikeSelected.imagePath} alt="Bike Image" width={450} height={450} />
                  </div>
                  <div className={style.status_container}>
                      <Status freios={bikeSelected?.estadoGeral.freios} pneus={bikeSelected?.estadoGeral.pneus} corrente={bikeSelected?.estadoGeral.corrente} amortecedor={bikeSelected?.estadoGeral.amortecedor} assento={bikeSelected?.estadoGeral.assento} pedal={bikeSelected?.estadoGeral.pedal} carcaça={bikeSelected?.estadoGeral.carcaça} />
                      <div className={style.status_container_menu}>
                        <button>Salva</button>
                        <button>Cancelar</button>
                      </div>
                  </div>
              </div>
              <div className={style.rapair_options_click}>
                <div className={style.rapair_options_click_buttons}>
                  <div onClick={() => handleItem("pneu")} className={style.adicionado}>
                    <i className="bi bi-disc"></i>
                    <p>Pneus</p>
                  </div>
                  <div onClick={() => handleItem("freio")}>
                    <i className="bi bi-capslock"></i>
                    <p>Freios</p>
                  </div>
                  <div onClick={() => handleItem("corrente")}>
                    <i className="bi bi-gear"></i>
                    <p>Corrente</p>
                  </div>
                  <div onClick={() => handleItem("amortecedor")}>
                    <i className="bi bi-sort-up-alt"></i>
                    <p>Amortecedor</p>
                  </div>
                  <div onClick={() => handleItem("assento")}>
                    <i className="bi bi-phone-landscape"></i>
                    <p>Assento</p>
                  </div>
                  <div onClick={() => handleItem("pedal")}>
                    <i className="bi bi-mouse3"></i>
                    <p>Pedal</p>
                  </div>
                  <div onClick={() => handleItem("carcaca")}>
                    <i className="bi bi-alt"></i>
                    <p>Carcaça</p>
                  </div>
                </div>
                <p>Clique no componente que você deseja restaurar</p>
              </div>
            </div>
            <div className={style.rapair_build_section}>
              <h3>Build</h3>
              <div className={style.rapair_build_item}>
                <div className={build[0] == undefined ? "" :style.ativado}><i className={build[0] == undefined ? "bi bi-question-lg" :`${build[0]}`}></i></div>
                <div className={build[1] == undefined ? "" :style.ativado}><i className={build[1] == undefined ? "bi bi-question-lg" :`${build[1]}`}></i></div>
                <div className={build[2] == undefined ? "" :style.ativado}><i className={build[2] == undefined ? "bi bi-question-lg" :`${build[2]}`}></i></div>
                <div className={build[3] == undefined ? "" :style.ativado}><i className={build[3] == undefined ? "bi bi-question-lg" :`${build[3]}`}></i></div>
                <div className={build[4] == undefined ? "" :style.ativado}><i className={build[4] == undefined ? "bi bi-question-lg" :`${build[4]}`}></i></div>
                <div className={build[5] == undefined ? "" :style.ativado}><i className={build[5] == undefined ? "bi bi-question-lg" :`${build[5]}`}></i></div>
                <div className={build[6] == undefined ? "" :style.ativado}><i className={build[6] == undefined ? "bi bi-question-lg" :`${build[6]}`}></i></div>
              </div>
            </div>
        </main>
    )
}