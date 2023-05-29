import { styled } from "styled-components"
import PostsInfo from "../components/PostsInfo"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Home() {
    const { logout, openModal, modal, post, closeModal, picture, description, setPicture, setDescription } = useContext(AuthContext)
    const pfp = window.localStorage.getItem("profilePicture")
    const nickname = window.localStorage.getItem("nickname")
    const biography = window.localStorage.getItem("biography")

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
                    <Link to={"/home"}>
                        <img src={pfp} alt="profile_picture" />
                    </Link>
                    <h3>{nickname}</h3>
                </div>
                <h1>FOMEBOOK</h1>
                <button onClick={logout}>Logout</button>
            </Header>

            

            <Main>
                {modal ?
                    <Modal onSubmit={post}>
                        <Button onClick={closeModal}>
                            X
                        </Button>
                        <div>
                            <h2>Novo Post</h2>
                            <input type="text" value={picture} onChange={e => setPicture(e.target.value)} placeholder="Foto" required/>
                            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" required/>
                            <button type="submit">Criar post</button>
                        </div>
                    </Modal>

                    :
                    <div></div>   
                }
                <DivFollow>
                    <Logo src={pfp} alt="profile_picture"/>
                    <div>
                        <h3>{nickname}</h3>
                        <p>{biography}</p>
                        <DivLinks>
                            <button onClick={openModal}>Comece seu post aqui!</button>
                            <Link to={`/following/${userId}`}>
                                <button>Ver seguidores</button>
                            </Link>

                            <Link to={`/followed/${userId}`}>
                            <button>Ver quem eu sigo</button>
                            </Link>
                        </DivLinks>
                    </div>
                </DivFollow>
                <PostsInfo postInfo={postInfo}/>
            </Main>
        </>
    )
}

const Main = styled.main`
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
    background-color: #5F1CB4;
    height: 61px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    
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
    width: 156px;
    height: 156px;
    border-radius: 100px;
    margin: 20px;
    margin-top: 40px;
`

const DivFollow = styled.div`
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    h3 {
        align-items: flex-start;
        background-color: aliceblue;
        font-family: "Montserrat";
        margin-left: 10px;
        font-weight: bold;
        margin-bottom: 20px;
        font-size: 46px;
    }

    p {
        width: 500px;
        font-family: "Montserrat";
        margin: 20px;
        font-size: 18px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }

    div h3{
       background-color: #FFFFFF;
    }
    
`

const DivLinks = styled.div` 
    font-family: "Montserrat";
     
     button {
        border-radius: 4px;
        border-style: none;
        width: 180px;
        height: 35px;
        background-color: #5F1CB4;
        cursor: pointer;
        margin-left: 250px;
        margin-top: 10px;
        font-weight: bold;
        color: #FFFFFF;
     }
`

const Modal = styled.form` 
    position: absolute;
    top: 120px;
    width: 700px;
    height: 450px;
    background-color: #5F1CB4;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    span {
        margin: 20px;
        font-size: 50px;
        cursor:pointer;
        color: #ED64A6;
     }
    div { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        margin-bottom: 20px;
        font-family: "Montserrat";
        color: #FFFFFF;
        font-weight: 500;
        font-size: 36px;
    }

    input {
        font-family: "Montserrat";
        margin: 10px;
        width: 500px;
        height: 65px;
    }

    div button {
        font-family: "Montserrat";
        box-sizing: border-box;;
        width: 508px;
        height: 65px;
        margin-top: 10px;
        border-style: none;
        color: #FFFFFF;
        border-radius:5px;
        background-color: #ED64A6;
        font-size: 24px;
        font-weight: bold;
        cursor:pointer;
    }
`

const Button = styled.button`
    font-family: "Montserrat";
    width: 56px;
    height: 56px;
    color: #FFFFFF;
    background-color: #ED64A6;
    border-radius:5px;
    border-style: none;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    cursor:pointer;

`


