import styled,{keyframes} from 'styled-components';
import 'animate.css';

const splashCena = keyframes`
    from,
    33%{
        opacity: 1;
        top:50%;
        right:50%;
        left:50%;   
        margin:0px;
        font-size:50px;
        transform: translate(-50%, -50%); 
    },
    to {
        opacity: 1;
        top:15px;
        left:15px;
        transform: translate(0%, 0%);
        font-size:20px;
        
    }
`;

const fadeIn = keyframes`
    0%,
    80%{
        transform: translateY(-100vh);
    },
    100% {
        transform: translateY(100vhpx);
    }
`;

export const Splash = styled.section`
    position: relative;
    min-height: 100vh;
    width:100vw;
    background-color:#121212;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.h1`
    position:fixed;
    width:min-content;
    color:#cfaf19;
    animation: ${splashCena} 6s;
    top:15px;
    left:15px;
    transform: translate(0%, 0%);
    font-size:20px;
    margin:0px;
    z-index:4;
`;
export const Container = styled.section`
    transform: skewY(-3deg);
    background-color: #cfaf19;
    min-height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 8s;
    .container{
        margin: 0 auto;
        transform: skewY(3deg);
        font-size: 24px;
        width: 80vw;

    }
`;

