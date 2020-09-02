import React from 'react'
import "./Cabecalho.css"
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

function Cabecalho() {
    return (
        <div className="cabecalho">
            <header>
                <Container>
                    <Link to="/"><h1>Marvel Comics</h1></Link>
                </Container>
            </header>
        </div>
    )
}

export default Cabecalho