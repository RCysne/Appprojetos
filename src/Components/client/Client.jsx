export default function Client() {
  return (
    <div className='container'>
      
      <fieldset className="clientForm">
        
        <div className='logomarca'>
          <img id='logo' src="/assets/images/logoDeitada.png"   alt="Logomarca" />
          </div>
          <p className='projects'>PROJETOS</p>

        <div className="buttons">
        
        
          <div className="btn">
            <button id="btnNew">Novo</button>
          </div>

          <div className="btn">
            <button id="btnView">Consultar</button>
          </div>
          
        </div>

      </fieldset>
    </div>
  )
}
