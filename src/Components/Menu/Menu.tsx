'use client';

import style from './Menu.module.css';

import Link from 'next/link';

export default function Menu() {
    return (
        <nav className={style.menu}>
            <ul>
                <li><Link href="/"><i className="bi bi-house-fill"></i> Home</Link></li>
                <li><Link href="/bikes"><i className="bi bi-bicycle"></i> Bikes</Link></li>
                <li><Link href="#services"><i className="bi bi-door-open-fill"></i> Logout</Link></li>
            </ul>
        </nav>
    );
}