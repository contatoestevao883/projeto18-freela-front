import { styled } from "styled-components"

export default function FollowsInfos({ followingInfo }) {
    return(
        <>
        {followingInfo.map((infos, index) => <FollowsInfo profilePicture={infos.followedProfilePicture} nickname={infos.followedName} biography={infos.followedBiography} key={index}/>)}
        </>
    )
}

function FollowsInfo(props){
    return(
        <Main>
            <h1>Seguindo:</h1>
            <DivContainer>
                <Logo src={props.profilePicture} alt="profile_picture"/>
                <div>
                    <h3>{props.nickname}</h3>
                    <p>{props.biography}</p>
                </div>
            </DivContainer>
        </Main>
    )
}

const Logo = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 100px;
    margin: 20px;
    margin-top: 40px;
`
const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border-style: none;
    font-family: "Montserrat";

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }

    h3 {
        margin: 20px;
        font-family: "Montserrat";
        font-weight: bold;
    }

    p {
        margin: 20px;
        font-family: "Montserrat";
        font-weight: 500;
    }

    button {

        font-family: "Montserrat";
        font-weight: bold;
        color: #5F1CB4;
        background-color: #ED64A6;
        border-style: none;
        color: #FFFFFF;
        border-radius: 5px;
        height: 30px;
        font-size: 14px;
        cursor: pointer;
        margin-bottom: 20px;
    }
`
const Main = styled.main` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: "Montserrat";
        font-weight: bold;
        font-size: 34px;
        margin-bottom: 50px;
        margin-top: 50px;

    }
`