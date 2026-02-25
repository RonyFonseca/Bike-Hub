'use client'

import AuthLayout from "../../../../Components/AuthLayout/AuthLayout";

import style from "../auth.module.css";

import {useRouter} from "next/navigation";

export default function Login() {

        const router = useRouter(); 

        const handleNavigate = (): void => {
            router.push(`/auth/create`);
        }

        const loginUser = () => {
            console.log("Vamos logar o usuário")
        }
    return (
        <AuthLayout>
            <form className={style.form}>
                <div className={style.form_icon}>
                    <i className="bi bi-person"></i>
                </div>

                <div className={style.group_inputs}>
                    <div  className={style.input_container}>
                        <label>E-mail</label>
                        <div className={style.form_input} >
                            <i className="bi bi-envelope"></i>
                            <input type="email" placeholder="E-mail" required/>
                        </div>
                    </div>
                    <div  className={style.input_container}>
                        <label>Password</label>
                        <div className={style.form_input}>
                            <i className="bi bi-lock"></i>
                            <input type="password" placeholder="Password" required/>
                        </div>
                        <p>Faça login usando suas credenciais em caso de <span className="bolder">erro ou esqueceu</span> sua senha fale com nosso suporte.</p>
                    </div>
                    <div className={style.form_button}>
                        <button className={style.form_button} onClick={loginUser}>Logar</button>
                        <button onClick={handleNavigate}><i className="bi bi-person-add"></i></button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    )
}