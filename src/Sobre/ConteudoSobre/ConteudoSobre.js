import React from 'react'
import "./ConteudoSobre.css"

function ConteudoSobre(props) {
    //Variável usada para verificar se os personagens foram passados
    let showChar = props.char.length !== 0 ? true : false

    return (
        <div>
            <div className="row">
                <div className="col-sm-5">
                    {/*Banner da página*/}
                    <div className="sticky-top paiBanner">
                        <img
                            src={props.infos.images[0].path +
                                "/portrait_incredible." + props.infos.images[0].extension}
                            className="banner"
                            alt="Comic banner"
                        />
                    </div>
                </div>
                
                {/*Conteúdo da página*/}
                <div className="col-sm-7">
                    <div className="conteudo">
                        {/*Título e descrição. Valor default passado casa não haja descrição*/}
                        <h2>{props.infos.title.replace("(Digest)", "")}</h2>
                        <p>{props.infos.description || "Description unavailable"}</p>
                        <hr className="my-4" />
                        
                        {/*É usado um loop para mostrar todos os personagens. Valor default 
                        passado casa não haja personagens*/}
                        <h3>Characters</h3>
                        <div>
                            {showChar ? props.char.map(c => {
                                return (
                                    <div className="row mb-4" key={c.id}>
                                        {/*Mostra thumbnail do personagem*/}
                                        <div className="col-sm-2">
                                            <img
                                                src={c.thumbnail.path +
                                                    "/standard_medium." + c.thumbnail.extension}
                                                className="img-icone"
                                                alt="Character avatar"
                                            />
                                        </div>

                                        {/*Mostra nome e descrição do personagem*/}
                                        <div className="col-sm-10">
                                            <p key={c.id}>
                                                <span className="nomes">{c.name}:   </span>
                                                {c.description || "Description unavailable"}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }) : <p>Unavailable characters</p>}
                        </div>
                        <hr className="my-4" />

                        {/*Mostra as principais informações sobre o quadrinho*/}
                        <h3>Details</h3>
                        <p>
                            <span className="nomes">Pages:  </span>
                            {props.infos.pageCount}
                        </p>
                        <p>
                            <span className="nomes">Creators:  </span>
                            {props.infos.creators.items.map((c, i) =>
                                i !== props.infos.creators.items.length - 1 ? `${c.name} - ` : `${c.name}`)}
                        </p>
                        <p>
                            <span className="nomes">Release Date:  </span>
                            {props.infos.dates[0].date.slice(0, 10)}
                        </p>
                        <p>
                            <span className="nomes">Price:  </span>
                            $ {props.infos.prices[0].price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConteudoSobre