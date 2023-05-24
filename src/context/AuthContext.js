import axios from "axios"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function signUp(e){
        e.preventDefault()
        const body = {
            email: email,
            name: name,
            password: password
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", body)
        promise.then((res) => {
            console.log(res.data)
            navigate("/")
        })
        promise.catch((err) => {
            console.log(err.response.message)
            alert(`Erro: ${err.response.data.message}`)
        })
    }


    return(
        <AuthContext.Provider value =
        {{ name, email, password, confirmPassword,
        setName, setEmail, setPassword, setConfirmPassword,  
        signUp                          
        }}>
            {children}
        </AuthContext.Provider>
    )
}