export default function NewClient() {
  return (
    <div className='container'>
      
      <fieldset className="clientForm">
        
        <div className='logomarca'>
          <img id='logo' src="/assets/images/logoDeitada.png"   alt="Logomarca" />
          </div>
          <p className='projects'>NOVO PROJETO</p>

          <div className="newClient">
            <label htmlFor="newClient">ID do Projeto</label>
            <input type="text" name="newClient" id="newClient" placeholder='Crie uma ID para o projeto.' />
          </div>

          <div className="btnNewClient">
            <button id="btnNewClient">Carregar Arquivos</button>
          </div>
          <div className="btnSave">
            <button id="btnSave">Salvar</button>
          </div>
        
      </fieldset>
    </div>
  )
}
