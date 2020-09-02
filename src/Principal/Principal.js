import React, { Component } from 'react'
import "./Principal.css"
import Cards from "./Cards/Cards"
import { Container, Row } from 'reactstrap'
import API_COMICS from "../api"
import Cabecalho from "../Cabecalho/Cabecalho"

class Principal extends Component {
    state = {
        comics: []
    }

    //Busca os quadrinhos na API e atribui para o estado "comics"
    componentDidMount() {
        API_COMICS()
            .then((resposta) => {
                this.setState({ comics: resposta })
            })
    }

    render() {
        const { comics } = this.state

        return (
            <div className="principal">
                <Cabecalho />
                <section>
                    <Container>
                        <Row>
                            {/*Para cada elemento do array "comics", chama e imprime um componente Card,
                            passando o atual elemento de "comics" como uma propriedade*/}
                            {comics.map(comic => {
                                return (
                                    <div className="col-lg-3 col-sm-6" key={comic.id}>
                                        <Cards infos={comic} />
                                    </div>
                                )
                            })}
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default Principal