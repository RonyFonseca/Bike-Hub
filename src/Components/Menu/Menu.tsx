'use client';

import style from './Menu.module.css';

import Link from 'next/link';

export default function Menu() {
    return (
        <nav className={style.menu}>
            <ul>
                <li><i className="bi bi-house-fill"></i><Link href="/">Home</Link></li>
                <li><i className="bi bi-bicycle"></i><Link href="/locador/bikes">Bikes</Link></li>
                <li><i className="bi bi-door-open-fill"></i><Link href="#services">Logout</Link></li>
                
            </ul>
        </nav>
    );
}