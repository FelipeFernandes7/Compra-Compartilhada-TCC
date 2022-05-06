import Logo from "../assets/globo 1.svg";
import  '../styles/register.css'; 

export function Register() {
  return(
    <div className="container">
        <div className="header">
            <div className="logo">
              <img className="img" src={Logo} alt="" />
            </div>
            <div className="title">
                <h1 className="h1">Criar Conta</h1>
            </div>
        </div>
        <div className="container-register">
              <div className="perfil">
                <h1>Perfil</h1>
              </div>
              <div className="register-area">
              <div className="cnpj-area">
                <h3>CNPJ:</h3>
                <input type="text" 
                placeholder=" Adicionar CNPJ"
                />
              </div>
              <div className="email-area">
                <h3>Email:</h3>
                <input type="text" 
                placeholder=" Adicionar Email"
                />
              </div>
              <div className="password-area">
                <h3>Senha:</h3>
                <input type="text" 
                placeholder=" Adicionar Senha"
                />
              </div>
              <div className="confPassword-area">
                <h3>Confirmar Senha:</h3>
                <input type="text" 
                placeholder=" Adicionar CNPJ"
                />
              </div>
              <div className="socialReason-area">
                <h3>Razão Social:</h3>
                <input type="text" 
                placeholder=" Adicionar Razão Social"
                />
              </div>
              <div className="ie-area">
                <h3>IE:</h3>
                <input type="text" 
                placeholder=" Adicionar IE"
                />
              </div>
              </div>
        </div>
    </div>
  )
}
export default Register;