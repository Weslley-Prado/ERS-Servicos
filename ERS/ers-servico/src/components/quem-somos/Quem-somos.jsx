import React from 'react'
import Quemsomos1 from '../../assests/img/quemsomos1.jpg'
import Quemsomos2  from '../../assests/img/quemsomos2.jpg'
import Quemsomos3  from '../../assests/img/quemsomos3.jpg'

import './Quem-somos.css'


export default props =>

    <div id="about">
        <div class="container">
            <div class="row">
                <div class="col-12 title57">
                    <h3 class="main-title">Quem somos</h3>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src={Quemsomos1} alt="WHT" />
                    <img class="img-fluid2" src={Quemsomos2} alt="WHT" />
                    <img class="img-fluid3" src={Quemsomos3} alt="WHT" />

                </div>
                
                <div class="col-md-6">
                    <h3 class="about-title">Uma empresa que pensa no futuro</h3>
                    <p className="paragrafo lead">
                        Fundada em 2018, a ERS Serviços é uma empresa especializada em prestação e terceirização de serviços, focada em fornecer soluções de gestão da qualidade operacional para o setor manufatureiro.

                    </p>
                    <p className="paragrafo lead">
                        Possuímos escritório instalado estrategicamente em uma região na qual favorece o deslocamento dos nossos funcionários em busca de reduzir o tempo de início em serviços que demandam atendimento Imediato.

                    </p>
                    <p className="paragrafo lead">
                        Oferecemos um portfólio abrangente de serviços que inclui: contenção de fornecedor, inspeção de recebimento, embarque controlado, verificação de estoque, residente técnico, controle de medidas, seleção visual, interação logística e retrabalho de peças diversas.

                    </p>
                    <p className="paragrafo lead">
                        O cuidado com a qualidade na prestação dos nossos serviços está diretamente relacionado com nossa gestão, que diariamente busca manter nossos processos definidos e com uma estrutura adequada, para alcançar um nível de qualidade superior e ajudar nossos clientes a otimizar o tempo, mantendo o foco no que realmente importa (conduzir o seu negócio).

                    </p>

                    <p className="paragrafo lead">
                        Nosso objetivo é oferecer serviços de qualidade com uma estrutura flexível, visando garantir a exigência sobre os resultados esperados e expectativas de valor agregado dos clientes.

                    </p>
                   
                    <p className="paragrafo2 lead">Missão:
                    </p>
                   
                    <ul id="about-list">
                        <li><i class="fa fa-check" aria-hidden="true"></i>
                            Serviços customizados
                        </li>
                        <li><i class="fa fa-check" aria-hidden="true"></i>Desenvolver e fornecer as melhores soluções na prestação de serviços, proporcionando elevados padrões de qualidade.
                        </li>
                    </ul>
                    <p className="paragrafo2 lead">Visão:
                    </p>
                   
                    <ul id="about-list">
                        <li><i class="fa fa-check" aria-hidden="true"></i>
                        Ser reconhecida no mercado pela excelência, com o compromisso continuo de aprimoramento, inovando sempre.
                        </li>
                    </ul>
                    <p className="paragrafo2 lead">Valores:
                    </p>
                   
                    <ul id="about-list">
                        <li><i class="fa fa-check" aria-hidden="true"></i>
                        Pessoas: respeito e atenção total ao cliente e colegas de trabalho.                        </li>
                        <li><i class="fa fa-check" aria-hidden="true"></i>
                        Ética: Agimos com transparência, honestidade e respeito para com nossos colaboradores, clientes, fornecedores e parceiros.
                        </li>
                        <li><i class="fa fa-check" aria-hidden="true"></i>
                        Foco em resultado: É o que assegura os nossos investimentos, remunera nossa equipe e viabiliza o crescimento do negócio.
                        </li>
                        <li><i class="fa fa-check" aria-hidden="true"></i>
                        Responsabilidade social e ambiental: A ERS Serviços preocupa-se com a sociedade e o meio ambiente e atua com responsabilidade para garantir que suas ações e condutas contribuam para um futuro melhor.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

