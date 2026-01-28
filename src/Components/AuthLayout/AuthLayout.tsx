"use client"

import Image from "next/image";

import style from "./AuthLayout.module.css";

import { usePathname } from "next/navigation";


import Link from "next/link";


export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {


    const path: string = usePathname().split("/")[2];

    const getThisPage = ():string => {
        return path=="login"? path : "create"; 
    }

    const buttonFunction = () => {
        switch(getThisPage()){
            case 'login':
                console.log("Logar");
                break;
            case 'create':
                console.log("Criar");
                break;    
        }
    }

    return (
        <div className={style.auth_container}>
            <div className={style.informations}>
                <div className={style.content}>
                    <div className={style.content_section1}>
                        <h2>Informações</h2>
                        <p>Seja bem-vindo! <span className="bolder">Cadastre-se e utilize o sistema</span> para gerenciar sua empresa de bikes de forma simples e organizada. Aqui você <span className="bolder">pode cadastrar sua empresa</span>, adicionar quantas bicicletas quiser e acompanhar o estado de cada uma, <span className="bolder">garantindo mais controle</span> e praticidade no dia a dia.</p>
                    </div>

                    <div className={style.content_section2}>
                        <p>Também é possível <span className="bolder">registrar manutenções</span>, mantendo o histórico sempre atualizado e facilitando a gestão dos serviços realizados.</p>
                        
                        <p>O sistema foi desenvolvido para ajudar você a <span className="bolder">organizar melhor seus processos</span> e ter uma visão clara de todas as suas bicicletas <span className="bolder">em um só lugar</span>.</p>

                        <p>Para <span className="bolder">mais informações</span> e para começar a utilizar o sistema, acesse o link abaixo. </p>
                        <div className={style.button_more_info}>
                            <a href="#">Mais informações</a>
                        </div>
                    </div>
                </div>
                <div className={style.image}>
                    <Image src="/image.png" alt="background" fill/>
                </div>
            </div>
            <div className={style.children_container}>
                <div className={style.children_container}>{children}</div>
                <footer className={style.form_footer_informations}>
                    <div>
                        <h3>Cadastro de empresa</h3>
                        <p>Damos suporte para o cadastro de <span className="bolder">sua empresa</span>, alguns <span className="bolder">pontos importantes</span>: denuncias sobre sua empresa pode ocasionar a uma investigação que pode desativar sua conta por 3 dias a 1 semana. Para você <span className="bolder">cadastrar sua empresa</span> basta {getThisPage() =="login"? (<>clicar no incone da engrenagem na página de criação de usuário ou <Link href="/auth/create">clique aqui</Link></>):"colocar suas informações no formulário."}</p>
                    </div>
                    <div>
                        <h3>Seus dados</h3>
                        <p><span className="bolder">Nós se responsabilizamos</span> pela segurança de seus dados, temos uma equipe de suporte ativa para solucionar seus erros. Somos uma empresa que evolui rente aos <span className="bolder">pedidos dos usuários</span>.</p>
                    </div>
                </footer>
            </div>
        </div>
    )   
}