import { styled } from "styled-components"
import {AiFillHeart} from 'react-icons/ai'

export default function PostsInfo({ postInfo }) {
    return(
        <>
        {postInfo.map((infos, index) => <PostInfo picture={infos.picture} likes={infos.likes} date={infos.date} description={infos.description} key={index}/>)}
        </>
    )
}

function PostInfo(props){
    return(
        <>
           <DivContainer>
                <Logo src={props.picture} alt="post_picture"/>
                <div>
                    <div>
                        <AiFillHeart className="heart"/>
                        <span>{props.likes} pessoas curtiram sua foto!</span>
                    </div>
                    <span className="date">{props.date}</span>
                </div>
                <p>{props.description}</p>
           </DivContainer>
        </>
    )
}

const DivContainer = styled.div`
    background-color: #FFFFFF;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 614px;
    height: 769px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    div {
        display: flex;
        justify-content: space-between;
    }

    div div span {
        margin-top: 5px;
        margin-left: 5px;
    }
    div span {
        margin-right: 30px;
        margin-top: 5px;
    }

    p {
        margin-top: 30px;
        margin-bottom: 50px;
    }
`
const Logo = styled.img` 
    height: 400px;
    margin: 20px;
`