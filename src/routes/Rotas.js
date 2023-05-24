import { Routes, Route } from 'react-router-dom'
import Login from '../pages/LoginPage'
import Cadastro from '../pages/CadastroPage'

export default function RoutesMain() {
    return(
        <Routes>
            <Route path="/" element= { <Login /> } />
            <Route path="/sign-up" element= { <Cadastro /> } />
        </Routes>
    )
}