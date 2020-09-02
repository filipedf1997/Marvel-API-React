import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom'

function Cards(props) {
    //Limita a quantidade de caracteres do título mostrado no Card e remove "(Digest)" do mesmo
    let title = props.infos.title.replace("(Digest)", "")
    title = title.length < 42 ? title : title.substring(0, 33) + "..."

    return (
        <div id="template">            
            <div className="card">
                {/*Imagem do Card. Caso seja clicada, redirecionará para o componente Sobre,
                passando como parâmetro da URL o id do quadrinho pertencente.*/}
                <Link to={`/${props.infos.id}`}>
                    <img 
                        src={props.infos.images[0].path + "/portrait_fantastic." + 
                            props.infos.images[0].extension} 
                        className="card-img-top" 
                        alt="Comic banner" />
                </Link>
                {/*Corpo e título do Card. Em caso de clique, acontece o mesmo que a Imagem.*/}
                <div className="card-body">
                    <Link to={`/${props.infos.id}`}>
                        <h6 className="card-title">{title}</h6>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cards;
