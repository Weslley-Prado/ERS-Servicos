import "./Contact.css";
import React, { Component } from "react";
import axios from "axios";
import Contato from "../../assests/img/contato.jpg";
import Mapa from "../../assests/img/mapa.png";

const API_PATH = "https://ersservicos.com.br/php/index.php";

export default class Contact extends Component {
  render() {
    return (
      <sectio className="Formulario">
        <img className="img-orcamento" src={Contato} alt="orcamento" />
        <div className="Mapa">{/* <p> Contato</p> */}</div>

        <div className="Form">
          <h3 className="contactTitulo lead">
            Entre em contato conosco de acordo com a sua necessidade
          </h3>
          <div class="row2">
          <div class="col-md-12 mapPrincipal ">
          <div class="col-md-6 mapaDiv">
            <img class="mapa " src={Mapa} alt="Politica" />
          </div>
          <div class="col-md-2 lead contactP left0">
            <h3>Recursos Humanos</h3>
            <p className="lead">(11) 91216-7623</p>
            <h3>Escritório</h3>
            <p className="lead" >(11) 3596-5101</p>
            <h3>Comercial</h3>
            <p className="lead">(11) 94727-0702</p>
            <h3>Demais assuntos</h3>
            <p className="lead" >contato@ersservicos.com.br</p>
            <h3>Localização</h3>
            <p className="lead">
              Rua Padre Clemente Segura, 548 - São Paulo - SP / <br /> Bairro Limoeiro
              CEP: 08051-040
            </p>
          </div>
        
          </div>
          </div>
        </div>
      </sectio>
    );
  }
}
