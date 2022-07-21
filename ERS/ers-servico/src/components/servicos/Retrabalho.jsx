import Trabalho from '../../assests/img/Retrabalho.jpeg'

const Retrabalho = () => {
    return(
    <div class="container Comum">

    <h1 className="hService"> Inspeção e seleção</h1>
    <div >
    <div >
    <div class="lateral_one col-md-6 left1">
      <p className="pHService lead"> Verificamos
      Verificamos se o produto atende as especificações
  estabelecidas de aceitação através da inspeção e
  realizamos seleção de peças tanto em estoque quanto
  em borda de linha para garantir o fluxo continuo das
  atividades.    
      </p>
    <ul>
      <li className="listFont"><i class="fas fa-check"></i>Preparação da área de inspeção</li>
      <li className="listFont"><i class="fas fa-check"></i>Controle de medidas</li>
      <li className="listFont"><i class="fas fa-check"></i>Inspeção de recebimento</li>
      <li className="listFont"><i class="fas fa-check"></i>Inspeções visuais e dimensionais</li>
      <li className="listFont"><i class="fas fa-check"></i>
      Seleção 100% ou por amostragem de
  componentes, através de instrumento de medição,
  gabarito, laboratorial e com utilização de
  calibradores.
      </li>
    </ul>
    </div>
    <div class="lateral_two col-md-6 ">
              <img class="imgService" src={Trabalho} alt="Politica" />
            </div>
            </div>
            </div>
  </div>
  
    )

  
}
export default Retrabalho;