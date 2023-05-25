import axios from "axios"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [profilePicture, setProfilePicture] = useState("")
    const [biography, setBiography] = useState("")
    const [password, setPassword]  = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function signUp(e){
        e.preventDefault()
        const body = {
            name: name,
            email: email,
            profilePicture: profilePicture,
            biography: biography,
            password: password,
            confirmPassword: confirmPassword
        }
        const promise = axios.post("http://localhost:5000/signup", body)
        promise.then((res) => {
            console.log(res.data)
            navigate("/")
        })
        promise.catch((err) => {
            console.log(err.response.message)
            alert(`Erro: ${err.response.data.message}`)
        })
    }

    function signIn(e){
        e.preventDefault()
        const body = {
            email: email,
            password: password,
        }
        const promise = axios.post("http://localhost:5000/signin", body)
        promise.then((res) => {
            console.log(res.data)
            navigate("/home")
        })
        promise.catch((err) => {
            console.log(err.response.message)
            alert(`Erro: ${err.response.data.message}`)
        })
    }


    return(
        <AuthContext.Provider value =
        {{ name, email,profilePicture, biography, password, confirmPassword,
        setName, setEmail, setProfilePicture, setBiography, setPassword, setConfirmPassword,  
        signUp, signIn                          
        }}>
            {children}
        </AuthContext.Provider>
    )
}