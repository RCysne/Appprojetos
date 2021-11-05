// import React from 'react';
// import logoL from '../../assets/images/LogoL.png'

// export default function NewClient(props) {
//   return (
//     <div className='container'>
        
//         <div className='logomarca'>
//           <img id='logo' src={logoL} alt="Logomarca" />
//         </div>

//           <legend>NOVO PROJETO</legend>

//           <div className="newClient">
//             <legend>Nome do Projeto: </legend>
//             <input type="text" name="newClient" id="newClient" placeholder='Crie uma ID para o projeto.' />
//           </div>

//         <div className="buttons">

//           <div className="btnNewClient">
//             <button id="btnNewClient">Carregar</button>
//           </div>
          
//           <div className="btnSave">
//             <button onClick={()=>props.history.push('/project-list')} id="btnSave">Salvar</button>
//           </div>

//           <div className="btn">
//             <button onClick={()=>props.history.goBack()} id="btnNew">Voltar</button>
//           </div>
//         </div>

//     </div>
//   )
// }