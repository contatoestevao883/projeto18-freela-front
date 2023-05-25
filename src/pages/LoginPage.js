import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const { signIn, email, password, setEmail, setPassword} = useContext(AuthContext)
    return(
        <>
            <DivContainer onSubmit={signIn}>
                <h3>Login</h3>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type= "password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <button type="submit">Entrar</button>
                <Link to="/">
                     <span>Não possuí uma conta? Cadastre-se</span>
                </Link>
            </DivContainer>
        </>
    )
}

const DivContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5F1CB4;
    height: 100vh;

    h3 {
        color: #FFFFFF;
        font-family: "Montserrat";
        font-weight: bold;
        font-size: 65px;
        margin-bottom:20px;
    }

    input { 
        font-family: "Montserrat";
        width: 500px;
        height: 65px;
        background: #F3F3F3;
        border-radius: 4px;
        border-style: none;
        margin-top: 22px;
    }

    input::placeholder {
        font-size: 18px;
        padding-left: 20px;
    }

    button {
        color: #FFFFFF;
        width: 500px;
        height: 62px;
        background: #ED64A6;
        border-radius: 5px;
        border-style: none;
        font-size: 32px;
        margin-top: 30px;
        margin-bottom: 30px;
        font-weight: bold;
        cursor: pointer;
    }
    
    span {
        color: #FFFFFF;
        font-weight: bold;
        cursor: pointer;
    }


`