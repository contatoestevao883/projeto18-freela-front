import { Routes, Route } from 'react-router-dom'
import Login from '../pages/LoginPage'
import Cadastro from '../pages/CadastroPage'
import Home from '../pages/HomePage'

export default function RoutesMain() {
    return(
        <Routes>
            <Route path="/" element= { <Login /> } />
            <Route path="/sign-up" element= { <Cadastro /> } />
            <Route path="/home" element= { <Home /> } />
        </Routes>
    )
}