export default function ProjectGallery() {
  return (
    <div className='container'>
      
      <fieldset className="clientFormProjects">
        
        <div className='logomarca'>
          <img id='logo' src="/assets/images/logoDeitada.png"   alt="Logomarca" />
          </div>
          <p className='projectsGallery'>PROJETO: ID</p>
      
        <div className="registeredListGallery">
          <ul className='listProjectsGallery'>
            <li><img className='imgProject' src="/assets/images/feira.jpg" alt="" />Planta Baixa 1</li>
            <li><img className='imgProject' src="/assets/images/opovofeira.jpg" alt="" />Planta Baixa 2</li>
            <li><img className='imgProject' src="/assets/images/espaco.jpg" alt="" />Planta Baixa 3</li>
          </ul>
        </div>
      
      
      <div className="btnLoadProjects">
        <button id="btnLoadProjects">Carregar Novos Arquivos</button>
      </div>

      <div className="btnSave">
        <button id="btnSave">Salvar</button>
      </div>
      </fieldset>
    </div>
  )
}
