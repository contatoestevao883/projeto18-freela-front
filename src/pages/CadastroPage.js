import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import styled from "styled-components"

export default function Cadastro() {
    const { name, email, password, setEmail, setPassword, setName, signUp } = useContext(AuthContext)
    return(
        <div onSubmit={signUp}>
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type= "password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <button type="submit">CADASTRAR</button>
                <Link to="/">
                     <span>Já possuí uma conta? Entre</span>
                </Link>
        </div>
    )
}