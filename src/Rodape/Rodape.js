import React from 'react'
import "./Rodape.css"

function Rodape(){
    return(
        <div>            
            <footer>
                <div className="container">
                    <p>
                        Teste para estágio na 
                        <a 
                            href="https://somapay.com.br/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        > Somapay </a>
                        | Filipe Dourado Falcão
                    </p>          
                </div>                  
            </footer>
        </div> 
    );
};

export default Rodape