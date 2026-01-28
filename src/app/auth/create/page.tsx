'use client';
import AuthLayout from "../../../Components/AuthLayout/AuthLayout";

import style from "../auth.module.css";

import {useRouter} from "next/navigation";

import { useRef, useState } from "react";

export default function Create() {

    const popupRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null); 

    const [typeCount, setTypeCount] = useState(""); 

    const inputNameRef = useRef<HTMLInputElement>(null); 
    const inputEmailRef = useRef<HTMLInputElement>(null); 
    const inputPasswordRef = useRef<HTMLInputElement>(null); 

    const router = useRouter(); 

    const handleNavigate = (): void => {
        router.push(`/auth/login`);
    }

    const createUser = () => {
        if(!popupRef.current) return
        popupRef.current.style.display = "block";
        
        if(!formRef.current) return
        formRef.current.style.opacity = "50%";
        formRef.current.style.filter = "blur(5px)";
    }

    const enterAs = (n:string) => {
        setTypeCount(n)
        if(!popupRef.current) return
        popupRef.current.style.display = "none";

        if(!formRef.current) return
        formRef.current.style.opacity = "100%";
        formRef.current.style.filter = "blur(0px)";

        if(!inputNameRef.current || !inputEmailRef.current || !inputPasswordRef.current) return 
        console.log(inputNameRef.current.value);
        console.log(inputEmailRef.current.value);
        console.log(inputPasswordRef.current.value);
    }

    return (
        <AuthLayout>
            <div className={style.popup_select_count} ref={popupRef}>
                <h3>Selecione como você se denomina</h3>
                <p>Locador é quem cadastra e disponibiliza suas bicicletas para que outras pessoas possam alugá-las.</p>
                <div className={style.buttons_select_count}>
                    <button onClick={() => enterAs("locador")}>Locador</button>
                    <button onClick={() => enterAs("locatário")}>Locatário</button>
                </div>
            </div>

            <form className={style.form} ref={formRef}>
                <div className={style.form_icon}>
                    <i className="bi bi-person-add"></i>
                </div>

                <div className={style.group_inputs}>
                    <div  className={style.input_container}>
                        <label>Nome</label>
                        <div className={style.form_input} >
                            <i className="bi bi-person"></i>
                            <input type="text" placeholder="Name" required ref={inputNameRef}/>
                        </div>
                    </div>
                    <div  className={style.input_container}>
                        <label>E-mail</label>
                        <div className={style.form_input} >
                            <i className="bi bi-envelope"></i>
                            <input type="email" placeholder="E-mail" required ref={inputEmailRef}/>
                        </div>
                    </div>  
                    <div  className={style.input_container}>
                        <label>Password</label>
                        <div className={style.form_input}>
                            <i className="bi bi-lock"></i>
                            <input type="password" placeholder="Password" required ref={inputPasswordRef}/>
                        </div>
                        <p>Escolha bem suas credenciais para o cadastro, mas fique tranquilo caso você esqueça é só acessar o suporte.</p>
                    </div>
                    <div className={style.form_button}>
                        <button className={style.form_button} onClick={createUser}>Criar</button>
                        <button onClick={handleNavigate}><i className="bi bi-person-add"></i></button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}

