import { Routes, Route } from 'react-router-dom'
import Login from '../pages/LoginPage'
import Cadastro from '../pages/CadastroPage'
import Home from '../pages/HomePage'
import Following from '../pages/FollowingPage'
import Followed from '../pages/FollowedByPage'

export default function RoutesMain() {
    return(
        <Routes>
            <Route path="/" element= { <Login /> } />
            <Route path="/sign-up" element= { <Cadastro /> } />
            <Route path="/home" element= { <Home /> } />
            <Route path="/following/:id" element= { <Following /> } />
            <Route path="/followed/:id" element= { <Followed /> } />
        </Routes>
    )
}