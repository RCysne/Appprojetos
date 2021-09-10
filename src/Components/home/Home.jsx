import { Link } from "react-router-dom"

export default function Home() {
  return (
    
    // Usando o Link em vez do elemento 'a', a página não dá o refresh usando o history api.
    
    <div>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/client'>Usuário</Link>
        <Link to='/new-client'>Novo</Link>
        <Link to='/project-list'>Lista de Projetos</Link>
        <Link to='/project-gallery'>Consulta de Projetos</Link>
      </header>
      <main>
        <h1 className='appprojetosHome'>
          APPProjetos
        </h1>
      </main>
    </div>







  // <div>
  //   <header>
  //     <a href="/">Home</a>
  //     <a href='/login'>Login</a>
  //     <a href="/client">Cadastrado</a>
  //     <a href="/new-client">Novo</a>
  //     <a href="/project-list">Lista de Projetos</a>
  //     <a href="/project-gallery">Consulta de Projetos</a>
  //   </header>

  //   <main>
  //     <h1 className='appprojetosHome'>
  //       APPProjetos
  //     </h1>
  //   </main>
  // </div>
  )
}
