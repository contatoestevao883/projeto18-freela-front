import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const { signIn, email, password, setEmail, setPassword} = useContext(AuthContext)
    return(
        <>
            <div onSubmit={signIn}>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type= "password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <button type="submit">Entrar</button>
                <Link to="/sign-up">
                     <span>Não possuí uma conta? Cadastre-se</span>
                </Link>
            </div>
        </>
    )
}