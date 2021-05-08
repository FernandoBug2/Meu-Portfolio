import React from 'react';
import './style.css'; 

function Cursos() {
    return (
        <section className='section_cursos' id='cursos'>
            <div className='conteudo_cursos'>
                <h2>Meus Cursos</h2>

                <div>
                    <figure className='imagens_icones'>
                        
                        <a href='https://www.devmedia.com.br/certificado/tecnologia/html/fernando-699' target='_blank'>
                            <img src='IconeHtml.png' alt='Icone do Html' /></a>

                        <a href='https://www.devmedia.com.br/certificado/tecnologia/css/fernando-699' target='_blank' className='css'>
                            <img src='IconeCss.png' alt='Icone do Js' /></a>

                        <a href='https://www.devmedia.com.br/certificado/tecnologia/javascript/fernando-699' target='_blank'>
                            <img src='IconeJs.png' alt='Icone do JavaScript' /></a>

                        <a href='https://www.devmedia.com.br/certificado/tecnologia/react/fernando-699' target='_blank' className='react' >
                            <img src='IconeReact.png' alt='Icone do React.JS' /></a>

                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Cursos; 