import styles from  "../styles/login.module.css";
import Logo from "../assets/globo 1.svg";
import React from "react";

export function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_title}>
        <div className={styles.logo}>
          <img className={styles.img} src={Logo} alt="" />
        </div>
        <div className={styles.title}>
          <h4>Compra Compartilhada</h4>
        </div>
      </div>

      <div className={styles.lineMid}>
        <div className={styles.line}></div>
      </div>

      <div className={styles.containerLogin}>
        <h1>Login</h1>
        <div className={styles.items_login}>
          <div className={styles.cnpj_area}>
            <h3>CNPJ</h3>
            <input type="text" placeholder="informe seu CNPJ" />
          </div>

          <div className={styles.senha_area}>
            <h3>Senha</h3>
            <input type="password" placeholder="informe sua senha" />
          </div>

          <div className={styles.alternative}>
            <div className={styles.forgot_password}>
              <a href="/">Esqueci a Senha</a>
            </div>
            <div className={styles.register}>
              <a href="/">Cadastre-se</a>
            </div>
          </div>
          
          <div className={styles.btnEntrar}>
            <button>Entrar</button>
          </div>

        </div>

      </div>

    </div>
  );
}
export default Login;