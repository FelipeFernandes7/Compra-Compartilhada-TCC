import styles from "../styles/login.module.css";
import Logo from "../assets/globo 1.svg";

import Swal from "sweetalert2";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const [cnpj, setCnpj] = useState("");
  const [_password, password] = useState("");
  async function onEntrarClicked() {
    try {
      if (!cnpj || !_password) {
        Swal.fire({
          background: "#191970",
          color: "#fff",
          icon: "error",
          title: "Oops...",
          text: "Você precisa preencher os campos!",
        });
      } else {
        if (cnpj || _password) {
          let timerInterval;
          Swal.fire({
            background: "#191970",
            color: "#ff00ff",
            title: "Redirecionando para Home",
            html: "Aguarde um instante <b></b> ...",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        }
        //REdirecionar para HOME
      }
    } catch (error) {
      console.log(error);
    }
  }
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
            <input
              type="text"
              placeholder="informe seu CNPJ"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            />
          </div>

          <div className={styles.senha_area}>
            <h3>Senha</h3>
            <input
              type="password"
              placeholder="informe sua senha"
              value={_password}
              onChange={(event) => password(event.target.value)}
            />
          </div>

          <div className={styles.alternative}>
            <div className={styles.forgot_password}>
              <a href="/">Esqueci a Senha</a>
            </div>
            <div className={styles.register}>
              <Link to="/register">Cadastre-se</Link>
            </div>
          </div>

          <div className={styles.btnEntrar}>
            <button id="btnEntrar" onClick={onEntrarClicked}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
