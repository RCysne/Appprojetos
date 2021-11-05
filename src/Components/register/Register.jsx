import React, {useState} from 'react';
import axios from 'axios';

export default function Register(props) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function reqRegister() {
    try {
      await axios({
        method: `POST`,
        url: `http://localhost:3333/register`,
        data: {
          username,
          email,
          password
        }
      })
      return props.history.push('/login')
    } catch (error) {
      console.log('Error')
    }
  }
  return (
      <div className='registerForm '>

        <section className="sectionForm" id="sectionForm">
          <form className="formulario">
            
                 <legend id="title-projects" className='register-legend'>
                    Cadastrar
                  </legend>
                  <div className="content">

                        <legend id='nome-legend' className='textInput'>Nome: </legend>
                        <input
                        onChange={(e) => setUsername(e.target.value)}
                          type="text"
                          name="nomeParceiro"
                          id="nomeParceiro"
                          placeholder="Digite o seu nome."
                        />
                    
                        <legend id='email-legend' className='textInput'>Email: </legend>
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Digite o seu email."
                        />
                     
                        <legend id='password-legend' className='textInput'>Senha: </legend>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          name="password-register"
                          id="password-register"
                          placeholder="Digite sua senha."
                        />
                     

                      <button onClick={reqRegister} type="button" className="btn_register" id="btn_register">
                        Enviar
                      </button>

                  </div>

            </form>
        </section>
      </div>
  )
}

