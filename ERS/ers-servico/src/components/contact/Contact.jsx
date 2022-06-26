import './Contact.css'
import React, { Component } from 'react'
import axios from 'axios';
import Contato from '../../assests/img/contato.jpg'
const API_PATH = 'https://ersservicos.com.br/php/index.php';


export default class Contact extends Component {



    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }

    }
    

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    };
    render() {
        return (
            <sectio className="Formulario">
                            <img className="img-orcamento" src={Contato} alt="orcamento"/> 

            <div className="Form">
               
                <h3 className='contactTitulo'> Deixe sua mensagem aqui</h3>
                <div>
                    <form action="/action_page.php">
                        <label>Nome</label>
                        <input type="text" id="fname" name="firstname" placeholder="Nome.."
                            value={this.state.fname}
                            onChange={e => this.setState({ fname: e.target.value })} />
                        <label>Sobrenome</label>
                        <input type="text" id="lname" name="lastname" placeholder="Sobrenome.."
                            value={this.state.lname}
                            onChange={e => this.setState({ lname: e.target.value })} />


                        <label>E-mail</label>
                        <input type="email" id="email" name="email" placeholder="E-mail"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })} />


                        <label>Mensagem</label>
                        <textarea id="subject" name="subject" placeholder="Escreva sua mensagem.."
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}></textarea>
                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Enviar" />
                        <div>
                            {this.state.mailSent &&
                                <div>Obrigado por sua mensagem, em breve retornaremos.</div>
                            }
                        </div>
                    </form>
                </div>
            </div>
            </sectio>
        );
    }
}
