import React from 'react';

export default function Client(props) {
  return (
    <div className='container'>
      
      <fieldset className="clientForm">
        
        <div className='logomarca'>
          <img id='logo' src="/assets/images/logoDeitada.png"   alt="Logomarca" />
          </div>
          
          <p className='projects'>PROJETOS</p>

        <div className="buttons">
        
        
          <div className="btn">
            <button onClick={()=>props.history.push('/new-client')} id="btnNew">Novo</button>
          </div>

          <div className="btn">
            <button onClick={()=>props.history.push("/project-list")} id="btnView">Consultar</button>
          </div>
          
        </div>

      </fieldset>
    </div>
  )
}
