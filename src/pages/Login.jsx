import "../styles/login.css";
import Logo from "../assets/globo 1.svg";
import React from "react";

export function Login() {
  return (
    <div className="container">
      <div className="logo-title">
        <div className="logo">
          <img className="img" src={Logo} alt="" />
        </div>
        <div className="title">
          <h4>Compra Compartilhada</h4>
        </div>
      </div>

      <div className="lineMid">
        <div className="line"></div>
      </div>

      <div className="containerLogin">
        <h1>Login</h1>
        <div className="items-login">
          <div className="cnpj-area">
            <h3>CNPJ</h3>
            <input type="text" placeholder="informe seu CNPJ" />
          </div>

          <div className="senha-area">
            <h3>Senha</h3>
            <input type="password" placeholder="informe sua senha" />
          </div>

          <div className="alternative">
            <div className="forgot_password">
              <a href="">Esqueci a Senha</a>
            </div>
            <div className="register">
              <a href="">Cadastre-se</a>
            </div>
          </div>
          
          <div className="btnEntrar">
            <button>Entrar</button>
          </div>

        </div>

      </div>

    </div>
  );
}
export default Login;