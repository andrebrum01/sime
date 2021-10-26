import styled,{keyframes} from 'styled-components';
import 'animate.css';

const fadeIn = keyframes`
    0%,
    80%{
        transform: translateY(-50px);
    },
    100% {
        transform: translateY(50px);
        animation-play-state: paused;
    }
`;
const aparecer = keyframes`
    0%,
    80%{
        opacity:0;
    },
    100% {
        opacity:1;
    }
`;

export const Container = styled.div`
    height: 60px;
    width: 100vw;
    background-color:#121212;
    top:0px;
    left:0px;
    right:0px;
    position: fixed;
    margin:0px;
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr auto;
    .logo{
        color:#cfaf19;
    }

    h1{
        /* position:fixed; */
        width:min-content;
        color:#cfaf19;
        padding-top:15px;
        padding-left:15px;
        transform: translate(0%, 0%);
        font-size:20px;
        margin:0px;
        z-index:4;
        animation: ${aparecer} 8s;
    }
    ul{
        color: whitesmoke;
        //display:flex;
        position: relative;
        right: 15px;
        top:15px;
        display: flex;
        padding: 0px 10px;
    }
    ul li{
        text-decoration:none;
        list-style: none;
        margin-left:25px;
        cursor: pointer;
        animation: ${fadeIn} ease-out;
        //transform: translateY(-50px);
        :hover{
            color:#cfaf19;
        }
    }
    a:hover{
        color:#cfaf19;
    }
    
    li:nth-child(1){
        animation-duration: 4s;
    }
    li:nth-child(2){
        animation-duration: 5s;
    }
    li:nth-child(3){
        animation-duration: 6s;
    }
`;

//const Title = styled.Link``;