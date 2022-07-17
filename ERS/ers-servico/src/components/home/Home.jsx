import React from "react";
import Banner1 from "../../assests/img/banner1.jpeg";
import Banner2 from "../../assests/img/banner2.jpeg";
import Banner3 from "../../assests/img/banner3.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import PoliticaQualidade from "../../assests/img/politicaqualidade.jpeg";
import Experiencia from "../../assests/img/experiencia.jpeg";

import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <main>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <div className="frase">
              <h2>
                Fornecemos as melhores soluções com elevados padrões de
                qualidade
              </h2>
            </div>
            {/* <div className="carousel-caption d-md-block">
                                                        <Link to="/contato" className="main-btn">Entre em contato</Link>
                                                </div> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 ftBanner2"
            src={Banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Soluções de qualidade e mão de obra especializada.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2>
              Entender as necessidades atuais e futuras de todas as partes
              interessadas
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div class="containerMarketing">
        <p className="identify">
          FUNDADA EM 2018, A ERS SERVIÇOS É UMA EMPRESA ESPECIALIZADA EM
          PRESTAÇÃO E TERCEIRIZAÇÃO DE SERVIÇOS, FOCADA EM FORNECER SOLUÇÕES DE
          GESTÃO DA QUALIDADE OPERACIONAL PARA O SETOR MANUFATUREIRO.
        </p>
        <div class="row">
          <div class="col-12">
            <h3 class="main-title2">Por que nos escolher?</h3>
            <hr className="line_one" />
          </div>

          <div class="col-md-6 left0">
            <h2 className="title1">Política de Qualidade</h2>
            <p className="pH lead font">
              Assegurar a satisfação do cliente, através da eficiência
              operacional, bem como a qualidade dos nossos serviços.
            </p>
            <p className="pH lead">
              Respeitar a individualidade do cliente, proporcionando serviços
              customizados contribuindo para que seja por ele percebida como
              referência de desempenho.
            </p>
            <p className="pH lead">
              A ERS serviços entende que o crescimento pessoal e profissional,
              mais a eficiência organizacional, reflete diretamente na qualidade
              e proporciona um ambiente favorável ao trabalho em equipe.
            </p>
          </div>

          <div class="col-md-6 ">
            <img class="img-fluid3" src={PoliticaQualidade} alt="Politica" />
          </div>
        </div>
        <div class="row">
          <hr className="line_two" />
          <div class="col-md-5">
            <img class="img-fluid4" src={Experiencia} alt="Experiencia" />
          </div>

          <div class="col-md-7 left1">
            <h3 className="title1">Nosso Objetivo</h3>
            <p className="pH2 lead">
              Nosso objetivo é oferecer serviços de qualidade com uma estrutura
              flexível, visando garantir a exigência sobre os resultados
              esperados e expectativas de valor agregado dos clientes.{" "}
            </p>
            <ul className="disc">
              <li className="disc"> Inspeção e seleção</li>
              <li className="disc"> Interação logística</li>
              <li className="disc">Retrabalho</li>
              <li className="disc">Embarque controlado</li>
              <li className="disc">Terceirização de mão de obra</li>
              <li className="disc">Residente técnico</li>
            </ul>
          </div>
          <p className="buttonParagrafo2">
            <Link
              to="/contato"
              class="btn btn-secondary"
              href="restaurantes.html"
            >
              Saiba mais &raquo;
            </Link>
          </p>
          <hr className="line_two" />
        </div>
      </div>
    </main>
  );
};
export default Home;
