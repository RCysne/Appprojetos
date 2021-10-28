import React from 'react';

export default function Login(props) {

  return (
    <div className='container'>
      
      <fieldset className="formLogin">

      <legend>APPprojetos</legend>

      <p className='clientLogin'>LOGIN</p>
      <label htmlFor='email'>Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu email."
        required
        autoFocus
      />
      <br />
      
      <label htmlFor='password'>Senha:</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Digite a sua senha."
        required
      />
      <br />

      <div className="btn">
        <button onClick={()=>props.history.push("/client")} id="btnE">Entrar</button>
      </div>
    </fieldset>
    </div>
  )
}
