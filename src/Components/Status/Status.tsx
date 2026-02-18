'use client'; 

import BarraP from "../BarraPorcentagem/BarraP";

import style from "./Status.module.css";

export default function Status(props: {freios?: number, pneus?: number, corrente?: number, amortecedor?: number, assento?: number, pedal?: number, carcaça?: number}) {
    return(
        <div className={style.status_container}>
            <div className={style.status_item}>
                <div>
                  <p><i className="bi bi-disc"></i> Pneus</p>
                  <p>{props.pneus??100}%</p>
                </div>
                <BarraP value={props.pneus??100}/>
              </div>

              <div className={style.status_item}>
                <div>
                  <p><i className="bi bi-capslock"></i> Freios</p>
                  <p>{props.freios??100}%</p>
                </div>
                <BarraP value={props.freios??100}/>
              </div>

              <div className={style.status_item}>
                <div>
                  <p><i className="bi bi-gear"></i> Corrente</p>
                  <p>{props.corrente??100}%</p>
                </div>
                <BarraP value={props.corrente??100}/>
              </div>

              <div className={style.status_item}>
                <div>
                  <p><i className="bi bi-sort-up-alt"></i> Amortecedor</p>
                  <p>{props.amortecedor??100}%</p>
                </div> 
                <BarraP value={props.amortecedor??100}/>
              </div>

              <div className={style.status_item}>
                <div>
                  <p><i className="bi bi-phone-landscape"></i> Assento</p>
                  <p>{props.assento??100}%</p>
                </div> 
                <BarraP value={props.assento??100}/>
              </div>

              <div className={style.status_item}>
                <div>
                  <p><i className="bi bi-mouse3"></i> Pedal</p>
                  <p>{props.pedal??100}%</p>
                </div> 
                <BarraP value={props.pedal??100}/>
              </div>

              <div className={style.status_item}>
                <div>
                  <p><i className="bi bi-alt"></i> Carcaça</p>
                  <p>{props.carcaça??100}%</p>
                </div> 
                <BarraP value={props.carcaça??100}/>
              </div>
        </div>
    )
}