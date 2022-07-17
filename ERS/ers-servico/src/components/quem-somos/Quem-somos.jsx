import React from "react";
import Quemsomos1 from "../../assests/img/quemsomos1.jpeg";
import Mission from "../../assests/img/mission-removebg-preview.png";
import Vision from "../../assests/img/vision.png";
import Values from "../../assests/img/values.png";
import Rsa from "../../assests/img/rsa.png";


import "./Quem-somos.css";

const About = () => {
  return (
    <div id="about">
      <div class="container">
        <div class="row">
          <div class="col-12 title57">
            <h3 class="main-title">Quem somos</h3>
          </div>

          <div class="col-md-9">
            <p className="paragrafo lead">
              Fundada em 2018, a ERS Serviços é uma empresa especializada em
              prestação e terceirização de serviços, focada em fornecer soluções
              de gestão da qualidade operacional para o setor manufatureiro
            </p>
            <p className="paragrafo lead">
              Possuímos escritório instalado estrategicamente em uma região na
              qual favorece o deslocamento dos nossos funcionários em busca de
              reduzir o tempo de início em serviços que demandam atendimento
              Imediato
            </p>
            <p className="paragrafo lead">
              Oferecemos um portfólio abrangente de serviços que inclui:
              contenção de fornecedor, inspeção de recebimento, embarque
              controlado, verificação de estoque, residente técnico, controle de
              medidas, seleção visual, interação logística e retrabalho de peças
              diversas.
            </p>
            <p className="paragrafo lead">
              O cuidado com a qualidade na prestação dos nossos serviços está
              diretamente relacionado com nossa gestão, que diariamente busca
              manter nossos processos definidos e com uma estrutura adequada,
              para alcançar um nível de qualidade superior e ajudar nossos
              clientes a otimizar o tempo, mantendo o foco no que realmente
              importa (conduzir o seu negócio)
            </p>

            <p className="paragrafo lead">
              Nosso objetivo é oferecer serviços de qualidade com uma estrutura
              flexível, visando garantir a exigência sobre os resultados
              esperados e expectativas de valor agregado dos clientes.
            </p>
          </div>
          <div class="col-md-3">
            <img class="img-fluid" src={Quemsomos1} alt="ERS" />
          </div>
          <div class="col-md-3">
            <img class="imgMission" src={Mission} alt="ERS" />
            <h3 className="titleMission">Missão</h3>
            <p className=" mission lead">
              Desenvolver e fornecer as melhores soluções na prestação de
              serviços, proporcionando elevados padrões de qualidade
            </p>
          </div>
          <div class="col-md-3">
            <img class="imgVision" src={Vision} alt="ERS" />
            <h3 className="titleVision">Visão</h3>
            <p className="vision lead">
              Ser reconhecida no mercado pela excelência, com o compromisso
              continuo de aprimoramento, inovando sempre.
            </p>
          </div>
          <div class="col-md-3">
            <img class="imgValues" src={Values} alt="ERS" />
            <h3 className="titleValues">Valores</h3>
            <p className=" values lead">
              <span>Pessoas:</span> respeito e atenção total ao cliente e colegas de
              trabalho. <br /> <span>Ética:</span>  Agimos com transparência, honestidade e respeito
              para com nossos colaboradores, clientes, fornecedores e parceiros.<br />
              <span>Foco em resultado:</span> É o que assegura os nossos investimentos,
              remunera nossa equipe e viabiliza o crescimento do negócio
            </p>
          </div>
          <div class="col-md-3">
            <img class="imgRSA" src={Rsa} alt="ERS" />
            <h3 className="titleRSA">
              Responsabilidade Social e ambiental
            </h3>
            <p className=" rsa lead">
              Responsabilidade social e ambiental: A ERS Serviços preocupa-se
              com a sociedade e o meio ambiente e atua com responsabilidade para
              garantir que suas ações e condutas contribuam para um futuro
              melhor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
