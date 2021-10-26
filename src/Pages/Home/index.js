import React,{Component} from "react";
import {Logo,Splash,Container} from './styled.js';

import Navbar from "../../Components/Navbar";

export default class Home extends Component{
 render(){
    return(
    <section>
        
        <Splash>
            <Navbar/>
            <Logo>SIME</Logo>
            <Container>
                <div className="container">
                    Nosso protótipo tem o objetivo de simular
                    umas das aplicações de
                    um motor monofáfiso, utilizando uma
                    esteira industrial. A partir desse
                    propotótipo, o nosso objetivo é mostrar de
                    forma clara e simples como
                    funciona essa aplicação, seus possíveis
                    erros e é claro melhorar a aprendizagem
                    do aluno.
                </div>
            </Container>
        </Splash>
    </section>
    );
 }

 on

}