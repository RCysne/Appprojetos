import React from 'react';

export default function ProjectId(props) {

  return (
    <div className='container'>
      
      <legend id="title-projects">ID do Projeto</legend>

        <input
          type="text"
          name="projectId"
          id="projectId"
          placeholder="Digite a ID do Projeto."
          required
          autoFocus
        />
     
      <div className="buttons btn-id">

        <div className="btn">
          <button onClick={()=>props.history.push("/project-list")}       id="btnE">Visualizar</button>
        </div>

      </div>
    </div>
  )
}