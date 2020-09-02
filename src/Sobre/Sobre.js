import React, { Component } from 'react'
import "./Sobre.css"
import API_COMICS from "../api"
import ConteudoSobre from "./ConteudoSobre/ConteudoSobre"
import Cabecalho from "../Cabecalho/Cabecalho"

class Sobre extends Component {
    state = {
        comic: [],
        characters: []
    }

    componentDidMount() {
        /*Busca um quadrinho específico na API através do id recuperado no parâmetro da URL,
        que foi passado pelo componente Principal/Card*/
        API_COMICS(this.props.match.params.id)
            .then((resposta) => {
                this.setState({ comic: resposta })
            })
        
        /*Busca os personagens presentes em um quadrinho específico da mesma forma citada acima*/
        API_COMICS(this.props.match.params.id, true)
            .then((resposta) => {
                this.setState({ characters: resposta })
            })
    }

    render() {
        const { comic } = this.state
        const { characters } = this.state

        return (
            <div className="sobre">
                <Cabecalho />
                {/*Chama e passa para o componente ConteudoSobre o quadrinho que deverá ser exibido
                na página e seus respectivos personagens*/}
                {comic.map(c => {
                    return (
                        <ConteudoSobre infos={c} char={characters} key={c.id} />
                    )
                })}
            </div>
        )
    }
}

export default Sobre