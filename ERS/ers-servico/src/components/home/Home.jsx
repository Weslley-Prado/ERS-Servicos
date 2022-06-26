import React from 'react'
import Banner1 from '../../assests/img/banner1.jpg'
import Banner2 from '../../assests/img/banner2.jpg'
import Banner3 from '../../assests/img/banner3.jpg'
import './Home.css'
import { Link } from 'react-router-dom'
import PoliticaQualidade from '../../assests/img/politicaqualidade.jpg'
import Experiencia from '../../assests/img/experiencia.jpg'



import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
        return (
                <main>
                        <Carousel fade>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={Banner1} alt="First slide" />
                                        <Carousel.Caption>
                                                <div className="frase">
                                                        <h2>Solução de qualidade e mão de obra especializada</h2>
                                                </div>
                                                <div className="carousel-caption d-md-block">
                                                        <Link to="/contato" className="main-btn">Entre em contato</Link>
                                                </div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={Banner2} alt="Second slide" />


                                        <Carousel.Caption>
                                                <h2>Fornecemos as melhores soluções e elevados padrões de qualidade</h2>
                                                <div className="carousel-caption d-md-block">
                                                        <Link to="/contato" className="main-btn">Entre em contato</Link>
                                                </div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img className="d-block w-100" src={Banner3} alt="Third slide" />

                                        <Carousel.Caption>
                                                <h2>A nossa empresa que é formada pelos melhores profissionais</h2>
                                                <div className="carousel-caption d-md-block">
                                                        <Link to="/contato" className="main-btn">Entre em contato</Link>
                                                </div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                        </Carousel>
                        <div class="containerMarketing">
                                <div class="row">
                                        <div class="col-12">
                                                <h3 class="main-title2">Por que nos escolher?</h3>
                                        </div>
                                        <div class="col-md-6 ">
                                                <img class="img-fluid3" src={PoliticaQualidade} alt="Politica" />
                                        </div>
                                        <div class="col-md-6 left0">
                                                <h2 class="featurette-heading">Experiência e Profissionalismo</h2>
                                                <p className="paragrafo lead font">
                                                        Fundada em 2018, a ERS Serviços é uma empresa especializada em prestação e terceirização de serviços, focada em fornecer soluções de gestão da qualidade operacional para o setor manufatureiro.
                                                </p>
                                                <h3 className="title1">Política de Qualidade</h3>
                                                <p className="paragrafo lead font">
                                                </p>
                                                <p className="paragrafo lead">
                                                </p>
                                                <p className="paragrafo lead">
                                                </p>

                                                <ul id="about-list">
                                                        <li className="paragrafo lead"><i class="fa fa-check" aria-hidden="true"></i> Assegurar a satisfação do cliente, através da eficiência operacional, bem como a qualidade dos nossos serviços.</li>
                                                        <li className="paragrafo lead"><i class="fa fa-check" aria-hidden="true"></i> Respeitar a individualidade do cliente, proporcionando serviços customizados contribuindo para que seja por ele percebida como referência de desempenho.</li>
                                                        <li className="paragrafo lead"><i class="fa fa-check" aria-hidden="true"></i>A ERS serviços entende que o crescimento pessoal e profissional, mais a eficiência organizacional, reflete diretamente na qualidade e proporciona um ambiente favorável ao trabalho em equipe.       </li>
                                                </ul>
                                                <p className="buttonParagrafo1"><Link to="/contato" class="btn btn-secondary" href="restaurantes.html">Saiba mais &raquo;</Link></p>


                                        </div>
                                </div>
                                <div class="row">
                                        <div class="col-12">
                                        </div>

                                        <div class="col-md-6 left1">
                                                <h3 className="title1">Nosso Objetivo</h3>
                                                <p className="paragrafo lead font">
                                                        É oferecer serviços de qualidade com uma estrutura flexível, visando garantir a exigência sobre os resultados esperados e expectativas de valor agregado dos clientes.
                                                </p>

                                                <ul id="about-list">
                                                        <li><i class="fa fa-check" aria-hidden="true"></i> Inspeção: Verificamos se o produto atende as especificações estabelecidas de aceitação.</li>
                                                        <li><i class="fa fa-check" aria-hidden="true"></i> Seleção: Realizamos seleção de peças tanto em estoque quanto em borda de linha para garantir o fluxo continuo das atividades.</li>
                                                        <li><i class="fa fa-check" aria-hidden="true"></i>Retrabalho: Tem como objetivo restaurar discrepância de peças ou conjunto montado sem que altere ou influencie no seu funcionamento, características e aplicação final.</li>
                                                        <li><i class="fa fa-check" aria-hidden="true"></i>Embarque controlado: Tem como objetivo controlar e assegurar a qualidade de peças, conjuntos e unidades vendáveis além de verificar a efetividade das ações propostas e realizadas.</li>
                                                        <li><i class="fa fa-check" aria-hidden="true"></i>Residente técnico: Tem o papel de intermediar as negociações e tratativas entre cliente e fornecedor, além de garantir a continuidade da linha de produção do cliente.  </li>
                                                        <li><i class="fa fa-check" aria-hidden="true"></i>Terceirização de mão de obra: Com objetivo de proporcionar maior disponibilidade de recursos para a atividade principal da contratante.
                                                        </li>
                                                        <li><i class="fa fa-check" aria-hidden="true"></i>Interação logística: Fornecemos o conjunto de atividades necessárias para que o produto chegue até o cliente interno/externo com qualidade e rapidez.
                                                        </li>
                                                </ul>

                                                <p className="buttonParagrafo2"><Link to="/contato" class="btn btn-secondary" href="restaurantes.html">Saiba mais &raquo;</Link></p>

                                        </div>
                                        <div class="col-md-6">
                                                <img class="img-fluid4" src={Experiencia} alt="Experiencia" />
                                        </div>
                                </div>
                        </div>
                </main>
        )
}
export default Home