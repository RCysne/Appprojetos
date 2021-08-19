export default function Register() {
  return (
      <div className='registerForm'>
        <div className="logoRegister">
          <div className="white">
            <h1>APPProjetos</h1>
          </div>
        </div>
        <section className="sectionForm" id="sectionForm">
          <form className="formulario" action="">
            <nav className="nav-tabs">
              <ul>
              <li>
                  <input
                    type="radio"
                    name="tabs"
                    className="rd_tabs"
                    id="tab2"
                  />
                  <label className="labelF" htmlFor="tab2">
                    Cadastrar
                  </label>
                  <div className="content">
                    <div className="partner">
                      <div className="namePartner">
                        <label htmlFor="nomeParceiro">Nome: </label>
                        <input
                          type="text"
                          name="nomeParceiro"
                          id="nomeParceiro"
                          placeholder="Digite o seu nome."
                        />
                      </div>
                      <div className="nameBusiness">
                        <label htmlFor="nomeEmpresa">Empresa: </label>
                        <input
                          type="text"
                          name="nomeEmpresa"
                          id="nomeEmpresa"
                          placeholder="Digite o nome da empresa."
                        />
                      </div>
                      <div className="emailPartner">
                        <label htmlFor="emailParceiro">Email: </label>
                        <input
                          type="email"
                          name="emailParceiro"
                          id="emailParceiro"
                          placeholder="Digite o email cadastrado."
                        />
                      </div>

                      <button className="btn_register" id="btn_register">
                        Enviar
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <input
                    type="radio"
                    name="tabs"
                    className="rd_tabs"
                    id="tab1"
                    checked
                  />
                  <label className="labelF" htmlFor="tab1">
                    Login
                  </label>
                  <div className="content">
                    <div className="login-data">
                      <div className="login">
                        <label htmlFor="loginParceiro">
                          Digite seu login:{' '}
                        </label>
                        <input
                          type="text"
                          name="loginRegister"
                          id="loginRegister"
                          placeholder="Login"
                        />
                      </div>
                      <div className="password-data">
                        <label htmlFor="senhaParceiro">
                          Digite sua senha:{' '}
                        </label>
                        <input
                          type="password"
                          name="senhaParceiro"
                          id="senhaParceiro"
                          placeholder="Senha"
                        />
                      </div>
                      <button className="btn_client" id="btn_client">
                        Enviar
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </form>
        </section>
      </div>
  )
}

