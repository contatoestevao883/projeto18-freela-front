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
    
    const [picture, setPicture] = useState("")
    const [description, setDescription] = useState("")

    const [followedInfo, setFollowedInfo] = useState([])
    const [followingInfo, setFollowingInfo] = useState([])

    const [modal, setModal] = useState(false)

    const token = window.localStorage.getItem("token")
    const userId = window.localStorage.getItem("userId")

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
            window.localStorage.setItem("nickname", res.data.name)
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
            window.localStorage.clear()
            window.localStorage.setItem("token", res.data.token)
            window.localStorage.setItem("profilePicture", res.data.profilePicture)
            window.localStorage.setItem("biography", res.data.biography)
            window.localStorage.setItem("userId", res.data.userId)
            window.localStorage.setItem("nickname", res.data.name)
            navigate("/home")
        })
        promise.catch((err) => {
            console.log(err.response.message)
            alert(`Erro: ${err.response.data.message}`)
        })
    }

    function post(){

        const body = {
            picture: picture,
            description: description
        }

        const config = {
            headers : { Authorization: `Bearer ${token}` }
        }

        const promise = axios.post("http://localhost:5000/posts", body, config)
        promise.then((res) => {
            console.log(res.data)
            navigate("/home")
        })
        promise.catch((err) => {
            console.log(err.response.data.message)
            alert(`Erro: ${err.response.data.message}`)
        })
    }

    function logout() {
        window.localStorage.clear();
        navigate("/")
    }

    function openModal(e) {
        e.preventDefault()
        setModal(true)
        console.log("Oi")
        
    }

    function closeModal() {
        setModal(false)
    }

    function follow(e){
        e.preventDefault()
        const config = {
            headers : { Authorization: `Bearer ${token}` }
        }

        const promise = axios.post(`http://localhost:5000/followed/${userId}`, config)
        promise.then((res) => {
            console.log(res.data)
            setFollowingInfo(res.data)
        })
        promise.catch((err) => {
            console.log(err.response.message)
            alert(`Erro: ${err.response.data.message}`)
        })
    }

    return(
        <AuthContext.Provider value =
        {{ name, email, profilePicture, biography, password, confirmPassword, picture, description, modal, followedInfo, followingInfo,
        setName, setEmail, setProfilePicture, setBiography, setPassword, setConfirmPassword, setPicture, setDescription, setFollowedInfo, setFollowingInfo,
        signUp, signIn, post, logout, openModal, closeModal, follow                  
        }}>
            {children}
        </AuthContext.Provider>
    )
}