import React,{useState} from 'react';
import axios from 'axios';

export default function Login(props) {

const [email,setEmail] = useState();
const [password,setPassword] = useState();
const [errorLogin, setErrorLogin] = useState([]);
function LoginError() {
  return errorLogin.map(element => 
    <p>{element}</p>
  )
}
async function reqLogin () {
  try {
    let {data} = await axios({
      method:`POST`,
      url:`http://localhost:3333/login`,
      data: {
        email,
        password
      }
    });
    if (data.status === `success`){
      localStorage.setItem(`user_id`,data.user.id)
      return props.history.push(`/project-list/${data.user.id}`)

    }
    setErrorLogin([`Login ou senha incorretos!`])
  } catch (error) {
    // setErrorLogin([`ocorreu um erro!`])
  }
}
  return (
    <div className='login-form'>
      <form>
      <legend id='label-login' className='textInput'> Login</legend>
      
      <div className="client-email">
        <legend>Email: </legend>
        <input
          onChange={(e) => setEmail(e.target.value) }
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email."
          required
          autoFocus
        />
        </div>
        
      <div className="client-password">
        <legend>Senha: </legend>
        <input
          onChange={(e) => setPassword(e.target.value) }
          type="password"
          name="password"
          id="password"
          placeholder="Digite a sua senha."
          required
        />
        </div>
      </form>

    <div className="buttons buttons-login">
      <div className="btn">
        <button onClick={reqLogin} id="btnE">Entrar</button>
      </div>
    </div>
    
     <div className="login-error" >
       <LoginError/>
     </div>

    </div>
  )
}
