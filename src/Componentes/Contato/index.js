import React from 'react';
import './style.css';

function Contato() {
    return (
        <footer id='contato'>
            <div className='div-footer'>

                <h2> Contatos</h2>

                <p>
                    WhatsApp: (12) 98111-6853
                </p>
                
                <p>
                    Email: Fernandobug2@gmail.com
                </p>

                <p id='links' >GitHub: <a href='https://github.com/FernandoBug2' target='_blank'>
                Fernando Gonçalves Prudente</a></p> 
                
                <p id='links' >LinkedIn: <a href='https://www.linkedin.com/in/fernando-gon%C3%A7alves-prudente-b230441bb/' target='_blank'>
                Fernando Gonçalves Prudente</a></p> 

                
            </div>
        </footer>
    );
}

export default Contato;