'use client';

import AuthLayout from "../../../../Components/AuthLayout/AuthLayout";

import style from "../auth.module.css";

import {useRouter} from "next/navigation";

import { useRef} from "react";

export default function Create() {

    const popupRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null); 

    const inputNameRef = useRef<HTMLInputElement>(null); 
    const inputEmailRef = useRef<HTMLInputElement>(null); 
    const inputPasswordRef = useRef<HTMLInputElement>(null); 

    const router = useRouter(); 

    const handleNavigate = (): void => {
        router.push(`/auth/login`);
    }

    const validateInformations = () => {
        if(inputEmailRef.current == null || inputPasswordRef.current == null || inputNameRef.current == null) throw "Erro no client"

        if(inputEmailRef.current.value == "" || inputPasswordRef.current.value == "" || inputNameRef.current.value == ""){
            throw "Informações vazias não serão aceitas !";
        }

        if(inputEmailRef.current.value.toLowerCase() != inputEmailRef.current?.value){
            throw "E-mail contém letras maiúsculas !";
        }

        if(inputPasswordRef.current.value.length < 8 ){
            throw "A senha deve conter no mínimo 8 caracteres !";
        }
    }

    const getInformations = () => {
        try {
            validateInformations(); 
            if(!popupRef.current) return
            popupRef.current.style.display = "block";
            
            if(!formRef.current) return
            formRef.current.style.opacity = "50%";
            formRef.current.style.filter = "blur(5px)";
        }catch(e){
            console.log(e);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const enterAs = (n:string) => {
        if(!popupRef.current) return
        popupRef.current.style.display = "none";

        if(!formRef.current) return
        formRef.current.style.opacity = "100%";
        formRef.current.style.filter = "blur(0px)";

        if(!inputNameRef.current || !inputEmailRef.current || !inputPasswordRef.current) return 

        const user = {
            name: inputNameRef.current.value,
            email: inputEmailRef.current.value,
            password: inputPasswordRef.current.value,
            typeCount: n, 
        }
        
        document.cookie = `token=${JSON.stringify(user)}; path=/`;
        router.push("/");
    }

    return (
        <AuthLayout>
            <div className={style.popup_select_count} ref={popupRef}>
                <h3>Selecione como você se denomina</h3>
                <p>Locador é quem cadastra e disponibiliza suas bicicletas para que outras pessoas possam alugá-las.</p>
                <div className={style.buttons_select_count}>
                    <button onClick={() => enterAs("locador")}>Locador</button>
                    <button onClick={() => enterAs("locatario")}>Locatário</button>
                </div>
            </div>

            <form className={style.form} ref={formRef} onSubmit={(e) => handleSubmit(e)}>
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
                        <button className={style.form_button} onClick={getInformations}>Criar</button>
                        <button onClick={handleNavigate}><i className="bi bi-person-add"></i></button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}

