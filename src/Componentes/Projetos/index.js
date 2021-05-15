import React from 'react';
import './style.css'

function Projetos() {		
    return(
        <div id='projeto-div'>

            <h2>Meus Projetos</h2>
        
            <div id='projeto1'>

                <h3>Calculadora IMC</h3>
                <p>Eu programei essa calculadora IMC, porque eu queria praticar e obter um pouco mais de experiência na programação.
                </p>
                <img src='projeto-calculo-imc.png' height='300' width='300'/>
                <h3>Tecnologias Usadas</h3>
                <p>| JavaScript | React.js | Css |</p>
                <a href='https://calculadoraimcfernando.netlify.app' target='_blank' >Link</a>
            </div>
                

            <div id='projeto2'>
                <h3>Convert Case</h3>
                <p>Eu programei esse convert case, porque eu queria praticar e obter um pouco mais de experiência na programação.
                </p>
                <img src='convert-case-print.png' height='300' width='300'/>
                <h3>Tecnologias Usadas</h3>
                <p>| JavaScript | React.js | Css |</p>
                <a href='https://convertercase.netlify.app'  target='_blank'>Link</a>
            </div>

            <div id='projeto3'>
                <h3>Projeto 3</h3>
                <p>..................
                    ..................
                    ..................
                </p>
                <img src='projeto-cadeado.png' height='300' width='300'/>
                <h3>Tecnologias Usadas</h3>
                <p>| .................. |
                    .................. |
                    .................. |
                </p>
                <a href=''  target='_blank'>Link</a>
            </div>
            
        </div>

    )
}

export default Projetos;