'use client';

import Menu from "../../Components/Menu/Menu";

import BigCardBike from "./_components/Cards/BigCard/BigCardBike";

import SimpleCard from "./_components/Cards/SimpleCard/SimpleCard";

import Footer from "@/Components/Footer/Footer";

import { useRef,useState } from "react";

import { Bike } from "@/types/Bike";

import style from "./page.module.css";

export default function Locador() {

  const [search, setSearch] = useState<Bike[]>([]);

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

  const [bikeSelected, setBikeSelected] = useState<Bike | null>(null);


  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchRef.current) {
      const query = searchRef.current.value;
      const filteredData = data.filter((bike) => bike.name.toLowerCase().startsWith(query.toLowerCase()));
      setSearch(filteredData);
    }
  }

  const handleClick = (key: number) => {
    const bike = data.find((b) => b.id === key);
    if (bike) {
      setBikeSelected(bike);
    }
  }

  return (
    <div className={style.container_home}>
      <main className={style.main_content}>
        <aside className={style.menu_aside}>
          <BigCardBike bike={bikeSelected || data[0]} />
          <div className={style.information_security}>
            <i className="bi bi-exclamation-triangle"></i>
            <p>É indicável seguir á risca os módulos de segurança que se encontra acima de mim.</p>
          </div>
        </aside>
        <section className={style.right_content}>
          <Menu/>
          <div className={style.main_container}>
            <div className={style.search_container}>
              <div className={style.search_input}>
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Buscar..." className={style.search_input} ref={searchRef} onChange={handleSearch}/>
              </div>
              <div className={style.search_shortcuts}>
                <p>Pesquise por bikes específicas pelo nome ou modelo.</p>
              </div>
            </div>
            <div className={style.cards_container}>
              {search.length > 0 ? (
                search.map((bike) => (
                  <SimpleCard
                    key={bike.id}
                    bike= {bike}
                    onclick={() => handleClick(bike.id)}
                  />
                ))
              ) : (
                data.map((bike) => (
                  <SimpleCard
                    key={bike.id}
                    bike= {bike}
                    onclick={() => handleClick(bike.id)}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
