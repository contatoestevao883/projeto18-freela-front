import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { styled } from "styled-components"
import FollowedInfos from "../components/FollowedByInfo"
import { Link } from "react-router-dom"


export default function Followed() {
    const { logout, token, followedInfo, setFollowedInfo } = useContext(AuthContext)


    const userId = window.localStorage.getItem("userId")
    const pfp = window.localStorage.getItem("profilePicture")
    const nickname = window.localStorage.getItem("nickname")

    useEffect(() =>{
        function listFollowers(){
                const config = {
                    headers : { Authorization: `Bearer ${token}` }
                }
                const promise = axios.get(`http://localhost:5000/followed/${userId}`, config)
                    promise.then((res) =>{
                    console.log(res.data)
                    setFollowedInfo(res.data)
                })
                    promise.catch((err) =>{
                    console.log(err.response.data)
                })
            }
            listFollowers()
    }, [])
    
    return(
        <>
              <Header>
                     <Link to={"/home"}>
                        <img src={pfp} alt="profile_picture" />
                    </Link>
                    <h1>FOMEBOOK</h1>
                    <button onClick={logout}>Logout</button>
            </Header>
            {followedInfo.length > 0  ?
                <FollowedInfos followedInfo={followedInfo} /> 
                : 
                <SpanFollow>Sentimos muito... você não segue ningúem no momento</SpanFollow>
            }
        </>
    )
}

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

const SpanFollow = styled.span` 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 56px;
    font-weight: bold;
    font-family: "Montserrat";
    width: 1200px;
    margin-left: 500px;
`