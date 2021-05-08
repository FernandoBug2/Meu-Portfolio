import React from 'react';
import './style.css'

function Projetos() {		
    return(
        <div id='projeto-div'>

            <h2>Meus Projetos</h2>

            <figure id='img-div'>
                <div>
                    <h3>Calculadora de IMC</h3>
                    <p>Eu construir essa calculadora, 
                        porque eu quis aperfeiçoar  minhas 
                        habilidade em programação, 
                        e obter um pouco mais de experiência. 
                    </p>
                    <img src='projeto-calculo-imc.png' ></img>
                    <h3>Tecnologias Usadas</h3>
                    <p>JavaScript | React.Js | Css</p>

                    <a href='https://calculadoraimcfernando.netlify.app/' target='_blank'>Link</a>
                </div>

                <div id='projeto-meio'>
                    <h3>Projeto 2</h3>
                    <p>............................................
                    ............................................
                    ............................................
                    ............................................
                    </p>
                    <img src='projeto-cadeado.png' ></img>
                    <h3>Tecnologias Usadas</h3>
                    <p>...................</p>

                    <a href=''>Link</a>
                </div>

                <div>
                    <h3>Projeto 3</h3>
                    <p>............................................
                    ............................................
                    ............................................
                    ............................................
                    </p>
                    <img src='projeto-cadeado.png' ></img>
                    <h3>Tecnologias Usadas</h3>
                    <p>...................</p>

                    <a href=''>Link</a>
                </div>

            </figure>
        </div>

    )
}

export default Projetos;