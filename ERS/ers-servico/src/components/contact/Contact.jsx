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

          <div class="row">
            <div class="col-md-6 ">
              <a href="https://goo.gl/maps/BADxR7VPpsudsaKN9">
                <img class="map" src={Mapa} alt="Politica" />
              </a>
            </div>
            <div class="col-md-6 left0 contactP">
              <h3>Recursos Humanos</h3>
              <p className="lead">(11) 91216-7623</p>
              <h3>Escritório</h3>
              <p className="lead">(11) 3596-5101</p>
              <h3>Comercial</h3>
              <p className="lead">(11) 94727-0702</p>
              <h3>Demais assuntos</h3>
              <p className="lead">contato@ersservicos.com.br</p>
              <h3>Localização</h3>
              <p className="lead">
                Rua Padre Clemente Segura, 548 - São Paulo - SP / <br /> Bairro
                Limoeiro CEP: 08051-040
              </p>
            </div>
          </div>
          <h3 className="contactTitulo ">
            Nos sigam nas redes sociais &nbsp;
            <a
              href="https://www.linkedin.com/company/ersservicos/"
              class="linkedin"
            >
              <img
                className="inst"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACjklEQVRoge2ZT2gTQRTGv9m0pu0mEAu2ikuJDQqCNNbWniJ6qViwFg+i0osXvTeCDfSmElIPAQ8eRK8FsQiilXqzgvWgLbbpQRFUrD0YW0ItCSbY3edFlCQ7SSd1divM7/bmvZ39vn37Z3YXUCgUCjdh1Qo8idQAiIaIoRuA7oAmAMgR2GsNlDRj4ceVCisa0EbnEiA2/G+1CRO3YuERXpJrwJNIDRDooRxNYjCN+s0rByfschp3K6IhaYoEsSwW5eW4BoihS44ccRjQzcvxOwD4JGipFT8vUcmALfuavZgaDGEtegDPB0PYu927OWmbRNjAnT4DRwwder2GiKHjdp8hQ9eGETbQ2dpYFHeVxE4jbOBN+kdRPFsSO42wgYuTS3ixlEPup4WpxSwuTX6RoWvD1Ilu8D5TwNGxDzK01IRwB7Yawh0whzvKxjyjqar53f56XO7Zgd6gD+0BLwqmhYXlPO6/XcXd+QwKJolKAVCDgVoItzTg6dl2tDT93V1DnQcRQ0fE0HGhoxn945/wNbcuPLcjp9D46WCR+FIOtTZi7FRb9bW9DY4YCAW2Va051ubDiRB3xcDFEQMWATdnVtB77yPOP1rEs89Z27pz+wPCcztyDVydTuPadPpP/ODdd0ycCeL4nuIj3rOrSXhuRzpwa3alKDaJEH/5raxupy5+PKUbIACZvFk2vrCcLxvzez3C80s3wLuzrBbKTW3Zu5BMlAG3UQbcRhlwm//eAPfZoSXma3vDkIQVC9tqrdQB+yWjK7A1Xob/bRRsRo4YcQjE1cI1oIGScuSIo8HiauEa+P1nJC5FkRB03Yx1PuFlq/9iujF30rJYlAGH4dwX6ywBrzRYyUriFQqFwn1+AXvFo7bcPPZdAAAAAElFTkSuQmCC"
              />
            </a>
            &nbsp;{" "}
            <a href="https://www.facebook.com/ersservicos" class="facebook">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            &nbsp;{" "}
            <a href="https://www.instagram.com/ersservicos/" class="instagram">
              <img
                className="inst"
                src="data:image/png;base64,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"
              ></img>
            </a>
          </h3>
        </div>
      </sectio>
    );
  }
}
