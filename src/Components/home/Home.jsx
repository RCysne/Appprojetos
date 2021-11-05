import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../src/assets/logo_size.jpg';



export default function Home() {
  return (
    
    
    <div className='container'>
      <header>
        <Link to='/'>HOME </Link>
        <Link to='/login'> LOGIN </Link>
        <Link to='/project-id'> PROJETOS </Link>
        <Link to='/register'> CADASTRO </Link>
        {/* <Link to='/client'>Usuário</Link>
        <Link to='/new-client'>Novo</Link>
        <Link to='/project-list'>Lista de Projetos</Link>
        <Link to='/project-gallery'>Consulta de Projetos</Link> */}
      </header>
      
      <div className="logo-appprojetos">
          <img src={logo} alt="Imagem Logomarca do appprojetos"/>
      </div>
    </div>
  )
}
