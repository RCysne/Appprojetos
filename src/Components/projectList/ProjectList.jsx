import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logoluciana from '../../assets/images/logoDeitada.png'


export default function ProjectList(props) {
  const [projectList,setProjectList] = useState([]);
  useEffect(() => {
    requestProjectList()
  },[]);
  useEffect(() => {
    requestProjectList()
  }, [props.history]);

  async function requestProjectList(){
    try {

      let {data} = await axios({
        method: `GET`,
        url: `http://localhost:3333/getMediaFiles`,
      })
      let projects = [];
      data.forEach(element => {
        if (element.user_id === localStorage.getItem(`user_id`)) projects.push(element)
      });
      setProjectList(projects)
    } catch (error) {
      
    }
  }
  return(
    <div className='container'>

        <div className='logomarca'>
          <img id='logo' src={logoluciana}   alt="Logomarca do escritório Luciana Otoch Arquitetura" />
          </div>

          <legend id="title-projects">PROJETOS</legend>

      <div className="projectArea">
        <div className="registeredList">
          <div className="project-list-add">
          <ul className='listProjects'>
            {projectList.map((element) => {
              return <a href={`http://localhost:3333/${element.file}`} target="_blank" rel="noopener noreferrer" >{element.project_name}</a>
            })}
          </ul>
          </div>

        <div className="buttons-list">
        
        <div className="btn">
          <button onClick={()=>props.history.goBack()} id="btnNew">Voltar</button>
        </div>
        
        <div className="btn">
          <button onClick={()=> props.history.push('/image')} id="btnE">Adicionar</button>
        </div>

        </div>
        </div>
      </div>

    </div>
  )
}