

import React from 'react'
import './Servicos.css'
import Peca from '../../assests/img/pecaqualidade.jpeg'
import Gerenciamento from '../../assests/img/gerenciamento.jpeg'


import { Link } from 'react-router-dom'


export default props =>

<div>


  <div class="container">

    <h3 class="time-title">Mais que qualidade, uma solução de negócio</h3>
    <div class="row featurette pad">

      <div class="col-md-7">
        <h2 class="featurette-heading">Serviços de inspeção e contenção</h2>

        <p class="lead paragrafo">Com objetivo de identificar se o lote, produto ou peça está de acordo com as 
        especificações do cliente.Disponibilizamos profissionais qualificados e treinados no processo produtivo do seu 
        cliente e/ou fornecedor. Atuando nas mais diversas atividades de validação de produto acabado ou componente, 
        através de inspeção, seleção, embarque controlado e retrabalho de produtos diversos etc.
        </p>
        <p class="lead paragrafo">Serviços de suporte a Qualidade incluem: </p>
        <ul id="about-list">
          <li><i class="fa fa-check" aria-hidden="true"></i>Residente técnico</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Controle de medidas</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Inspeção de recebimento</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Contenção em fornecedor </li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Análise junto ao fornecedor</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Análise e controle de qualidade</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Preparação da área de inspeção </li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Embarque controlado NívelⅠeⅡ</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Inspeções visuais e dimensionais</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Retrabalhos em produtos diversos</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Apoio técnico no processo de usinagem</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Triagem de estoque em casos de suspeita de lote contaminado</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Seleção 100% ou por amostragem de componentes, através de instrumento de medição, gabarito, laboratorial e com utilização de calibradores.</li>
        </ul>
        <p className="buttonParagrafo7"><Link to="/contact" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>

      </div>

      <div class="col-md-5">
        <img src={Peca} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid8 mx-auto" width="500"
          height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice" focusable="false" />
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
      </div>

    </div>
    <div class="row featurette pad">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Logística e operações</h2>
            <p class="lead paragrafo">
            A ERS Serviços oferece soluções integradas para atender a uma variedade de demanda dos clientes.Contamos com 
            uma equipe especializada em lidar com questões logísticas, incluindo gerenciamento de estoque,controle de 
            recebimento, transbordo de material, suporte ao plano de produção e movimentações de carga, etc.
            </p>
              <p class=" lead paragrafo">Serviços de suporte à logística incluem:</p>
              <ul id="about-list">
                <li><i class="fa fa-check" aria-hidden="true"></i> Almoxarife</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Conferente</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Transbordo</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Auxiliar de logística</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Supervisor de logística</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Movimentação de carga</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Controle de recebimento</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Operador de empilhadeira</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> Líder de operações logística</li>              

              </ul>    
              <p className="buttonParagrafo9"><Link to="/contact" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>
          
          </div>
          <div class="col-md-5 order-md-1">
            <img src={Gerenciamento}
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid8 mx-auto" width="500"
              height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
              focusable="false"/>
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
          </div>

          </div>
          {/* <div class="row featurette pad">
          <div class="col-md-7">
            <h2 class="featurette-heading"> Implementação, auditorias e consultorias em sistema de qualidade e requisitos específicos de clientes. </h2>
            <p class="lead paragrafo">Oferecemos expertise e experiência em implementação de Sistema de Gestão da qualidade.
            </p>
            <p class="lead paragrafo">Atividades:</p>
            <ul id="about-list">
              <li><i class="fa fa-check" aria-hidden="true"></i>Liderança na implantação dos Elementos do Sistema de Manufatura e Segurança</li>
              <li><i class="fa fa-check" aria-hidden="true"></i>Divisão dos elementos entre as lideranças da organização</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Reuniões com as gerências da planta e apresentação da evolução</li>
              <li><i class="fa fa-check" aria-hidden="true"></i> Revisão do processo com alta administração da planta</li>
            </ul>
            <p className="buttonParagrafo7"><Link to="/contact" class="btn btn-secondary" >Saiba mais &raquo;</Link></p>

          </div>
          <div class="col-md-5">
            <img src={Gestao}
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid8 mx-auto" width="500"
              height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false"/>
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
          </div> */}

          {/* </div> */}

</div>
</div>





