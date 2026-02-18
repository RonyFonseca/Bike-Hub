'use client'; 

import style from './CardSquare.module.css';

import Image from 'next/image';
import { Bike } from '@/types/Bike';

export default function CardSquare(props: {bike: Bike, onClick: () => void}){
    return (
        <div className={style.card_square} onClick={props.onClick}>
            <div className={style.image_container}>
                <i className="bi bi-hand-index-thumb"></i>
                <Image src={props.bike.imagePath} alt="Bike Image" width={100} height={100} />
            </div>
            <div className={style.information}>
                <p>{props.bike.name}</p>
                <p>{props.bike.dataCriacao}</p>
            </div>
        </div>
    )
}