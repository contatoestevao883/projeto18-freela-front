import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import styled from "styled-components"

export default function Cadastro() {
    const { name, email, profilePicture, biography, password, confirmPassword, 
            setName, setEmail, setProfilePicture, setBiography, setPassword, setConfirmPassword, 
            signUp 
          } = useContext(AuthContext)
    return(
        <DivContainer onSubmit={signUp}>
                <h3>Cadastrar</h3>
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type= "text" placeholder="Foto de perfil" value={profilePicture} onChange={e => setProfilePicture(e.target.value)} required/>
                <input type= "text" placeholder="Biografia" value={biography} onChange={e => setBiography(e.target.value)} required/>
                <input type= "password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <input type= "password" placeholder="Confirmar senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                <button type="submit">Cadastrar</button>
                <Link to="/">
                     <span>Já possuí uma conta?</span>
                </Link>
        </DivContainer>
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

    input:nth-child(5){
        height: 100px;
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