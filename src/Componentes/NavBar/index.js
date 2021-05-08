import React from 'react';
import './style.css'

function NavBar() {
    return (
        <div>
            <nav className='navbar'>
                <a href='#projeto-div'>Projetos</a>
                <a href='#contato'>Contato</a>
                <a href='#cursos'>Cursos</a>
                <a href='#sobre-mim'>Sobre</a>
            </nav>
        </div>
    );
}

export default NavBar;