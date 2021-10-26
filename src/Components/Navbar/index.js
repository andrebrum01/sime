import React,{Component} from "react";

import {Container,Title} from './styled';
import { Link } from "react-router-dom";

export default class Navbar extends Component{
 render(){
    return(
    <Container>
       <h1>
          <Link className="logo" to="">SIME</Link>
       </h1>
       <ul>
          <li>Learn</li>
          <li>Motores</li>
          <li><Link to="/download">Download</Link></li>
       </ul>
    </Container>
    );
 }

}