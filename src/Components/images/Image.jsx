import React, {useState} from 'react';
import axios from 'axios';

export default function Image(props) {

    const [projectName, setProjecName]  = useState();
    const [imageUrl, setImageUrl] = useState();


    async function requestImage() {
        try {
            let form = new FormData()
            form.append('user_id',localStorage.getItem(`user_id`))
            form.append('project_name',projectName)
            form.append(`image`,imageUrl)

            await axios.post(`http://localhost:3333/uploadFile`,form);
            props.history.push(`/project-list`)
        } catch (error) {
            
        }
    }

    return(
        <div className="container">
            <legend id="title-projects">Projetos</legend>

            <section className="add-projects">
            <p id="project-name">Nome do Projeto: </p>  <input type="text" onChange={(e) => setProjecName(e.target.value)} name="nameProject" id="nameProject" />
            <input onChange={(e) => setImageUrl(e.target.files[0])} type="file" name="images" id="images" />
            </section>
            
            <div className="btn btn-add-projects">
                <button onClick={requestImage} id="btn_save">Salvar</button>
            </div>

            <div className="btn">
                <button onClick={()=>props.history.goBack()} id="btnBack">Voltar</button>
            </div>
            
        </div>
    )
}
