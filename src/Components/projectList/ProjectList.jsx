export default function ProjectList() {
  return (
    <div className='container'>
    
      <fieldset className="clientFormProjects">
        
        <div className='logomarca'>
          <img id='logo' src="/assets/images/logoDeitada.png"   alt="Logomarca" />
          </div>
          <p className='projects2'>PROJETOS</p>
      <div className="projectArea">
        <div className="registeredList">
          <ul className='listProjects'>
            <li>Padaria X</li>
            <li>Casa 1 Alphaville</li>
            <li>Casa 2 Alphaville</li>
            <li>Comércio Tudo Ok</li>
            <li>Loja Sapatiado</li>
            <li>Terreno Baldio</li>
            <li>Quarteirão com Queijo</li>
            <li>Restaurante de sushi</li>
            <li>Zé da Esquina</li>
          </ul>
          <ul>
            <li>Fazenda X</li>
            <li>Frigorífico Y</li>
            <li>Casa de Show</li>
            <li>Shopping</li>
          </ul>
        </div>
        </div>
      </fieldset>
    </div>
  )
}
