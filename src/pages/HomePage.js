import { styled } from "styled-components"
import PostsInfo from "../components/PostsInfo"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Home() {
    const { logout } = useContext(AuthContext)
    const pfp = window.localStorage.getItem("profilePicture")
    const nickname = window.localStorage.getItem("nickname")

    const [postInfo, setPostInfo] = useState([])

    const userId = window.localStorage.getItem("userId")
    
    useEffect(() =>{
        function listPosts(){
            const promise = axios.get(`http://localhost:5000/posts/${userId}`)
            promise.then((res) =>{
                console.log(res.data)
                setPostInfo(res.data)
            })
            promise.catch((err) =>{
                console.log(err.response.data)
            })
        }
        listPosts()
    }, [])
    

    return(
        <>
            <Header>
                    <div>
                        <img src={pfp} alt="profile_picture" />
                        <h3>{nickname}</h3>
                    </div>
                    <h1>FOMEBOOK</h1>
                    <button onClick={logout}>Logout</button>
            </Header>
            <Main>
                <DivFollow>
                    <Logo src={pfp} alt="profilePicture"/>
                    <Link to={`/followers/${userId}`}>
                        Ver seguidores
                    </Link>

                    <Link to={`/following/${userId}`}>
                        Ver quem eu sigo
                    </Link>
                </DivFollow>
                <PostsInfo postInfo={postInfo}/>

            </Main>
        </>
    )
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 700px;
        height: 97px;
        background: #FFFFFF;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        border-style: none;
        font-size: 20px;
    }
`   

const Header = styled.header`
    margin-bottom: 600px;
    background-color: #5F1CB4;
    height: 61px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div{
        display: flex;
        align-items: center;
    }

    h1 {
        font-size: 35px;
        font-weight: bold;
        color: #FFFFFF;
    }

    img {
        width: 49px;
        height: 46px;
        border-radius: 100px;
        margin-left: 50px;
    }

    h3{
        color: #FFFFFF;
        font-family: "Montserrat";
        margin-left: 10px;
        font-weight: bold;
    }

    button {
        margin-right: 50px;
        font-family: "Montserrat";
        font-weight: bold;
        color: #5F1CB4;
        background-color: #ED64A6;
        border-style: none;
        color: #FFFFFF;
        border-radius: 5px;
        width: 97px;
        height: 30px;
        font-size: 18px;
        cursor: pointer;
    }
`

const Logo = styled.img`

`

const DivFollow = styled.div`

`