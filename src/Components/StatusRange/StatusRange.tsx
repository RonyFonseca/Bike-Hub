'use client';

import { useState } from "react";
import style from "./StatusRange.module.css";

interface StatusProps {
  pneus?: number;
  freios?: number;
  corrente?: number;
  amortecedor?: number;
  assento?: number;
  pedal?: number;
  carcaça?: number;
}

export default function Status({
  pneus = 100,
  freios = 100,
  corrente = 100,
  amortecedor = 100,
  assento = 100,
  pedal = 100,
  carcaça = 100
}: StatusProps) {

  const [pneu, setPneu] = useState(pneus);
  const [freio, setFreio] = useState(freios);
  const [correnteState, setCorrente] = useState(corrente);
  const [amortecedorState, setAmortecedor] = useState(amortecedor);
  const [assentoState, setAssento] = useState(assento);
  const [pedalState, setPedal] = useState(pedal);
  const [carcacaState, setCarcaca] = useState(carcaça);

  return (
    <div className={style.status_container}>

      {/* Pneus */}
      <div className={style.status_item}>
        <div>
          <p><i className="bi bi-disc"></i>Pneus</p>
          <p>{pneu}%</p>
        </div>
        <input type="range" min="0" max="100" value={pneu}
          onChange={(e) => setPneu(Number(e.target.value))}
        />
      </div>

      {/* Freios */}
      <div className={style.status_item}>
        <div>
          <p><i className="bi bi-capslock"></i>Freios</p>
          <p>{freio}%</p>
        </div>
        <input type="range" min="0" max="100" value={freio}
          onChange={(e) => setFreio(Number(e.target.value))}
        />
      </div>

      {/* Corrente */}
      <div className={style.status_item}>
        <div>
          <p><i className="bi bi-gear"></i>Corrente</p>
          <p>{correnteState}%</p>
        </div>
        <input type="range" min="0" max="100" value={correnteState}
          onChange={(e) => setCorrente(Number(e.target.value))}
        />
      </div>

      {/* Amortecedor */}
      <div className={style.status_item}>
        <div>
          <p><i className="bi bi-battery-half"></i>Amortecedor</p>
          <p>{amortecedorState}%</p>
        </div>
        <input type="range" min="0" max="100" value={amortecedorState}
          onChange={(e) => setAmortecedor(Number(e.target.value))}
        />
      </div>

      {/* Assento */}
      <div className={style.status_item}>
        <div>
          <p><i className="bi bi-battery-half"></i>Assento</p>
          <p>{assentoState}%</p>
        </div>
        <input type="range" min="0" max="100" value={assentoState}
          onChange={(e) => setAssento(Number(e.target.value))}
        />
      </div>

      {/* Pedal */}
      <div className={style.status_item}>
        <div>
          <p><i className="bi bi-battery-half"></i>Pedal</p>
          <p>{pedalState}%</p>
        </div>
        <input type="range" min="0" max="100" value={pedalState}
          onChange={(e) => setPedal(Number(e.target.value))}
        />
      </div>

      {/* Carcaça */}
      <div className={style.status_item}>
        <div>
          <p><i className="bi bi-battery-half"></i>Carcaça</p>
          <p>{carcacaState}%</p>
        </div>
        <input type="range" min="0" max="100" value={carcacaState}
          onChange={(e) => setCarcaca(Number(e.target.value))}
        />
      </div>

    </div>
  );
}
