import React from 'react';

export default function Client(props) {
  let test = props.history.location.pathname.split("");
  var ultimo = test[test.length - 1];

  console.log(ultimo);
  return (
    <div className='container'>
        
        <div className='logomarca'>
          <img id='logo' src="../../assets/images/LogoL.png" alt="Logomarca" />
          </div>
          
          <legend>PROJETOS</legend>

        <div className="buttons">
          <div className="btn">
            <button onClick={()=>props.history.push('/new-client')} id="btnNew">Novo</button>
          </div>

          <div className="btn">
            <button onClick={()=>props.history.push("/project-list")} id="btnView">Consultar</button>
          </div>
          <div className="btn">
            <button onClick={()=>props.history.goBack()} id="btnNew">Voltar</button>
          </div>
        </div>

    </div>
  )
}
