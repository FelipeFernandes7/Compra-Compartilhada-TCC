import Logo from "../assets/globo 1.svg";
import styles from "../styles/register.module.css";
import seta from "../assets/arrow.png";

import { Link } from "react-router-dom";
import Toggle from "../components/Toggle";

export function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.setaChange}>
        <Link to="/">
          <img className={styles.seta} src={seta} alt="" />
        </Link>
      </div>

      <div className={styles.allItems}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.img} src={Logo} alt="" />
          </div>
          <div className={styles.title}>
            <h1 className={styles.h1}>Criar Conta</h1>
          </div>
        </div>

        <div className={styles.container_register}>
          <div className={styles.perfil}>
            <h2 className={styles.titleperf}>Perfil do candidato</h2>
          </div>
          <div className={styles.lineMid}>
            <div className={styles.line}></div>
          </div>

          <div className={styles.register_area}>
            <div className={styles.cnpj_area}>
              <h3>CNPJ:</h3>
              <input type="text" placeholder=" Adicionar CNPJ" />
            </div>
            <div className={styles.email_area}>
              <h3>Email:</h3>
              <input type="email" placeholder=" Adicionar Email" />
            </div>
            <div className={styles.password_area}>
              <h3>Senha:</h3>
              <input type="password" placeholder=" Adicionar Senha" />
            </div>

            <div className={styles.confPasswword_area}>
              <h3>Confirmar Senha:</h3>
              <input type="password" placeholder=" Confirmar Senha" />
            </div>

            <div className={styles.socialReason_area}>
              <h3>Razão Social:</h3>
              <input type="text" placeholder=" Adicionar Razão Social" />
            </div>
            <div className={styles.ie_area}>
              <h3>IE:</h3>
              <input type="text" placeholder=" Adicionar IE" />
            </div>
            <div className={styles.uf_area}>
              <h3>UF:</h3>
              <input type="text" placeholder=" Adicionar UF" />
            </div>
            <div className={styles.cidade_area}>
              <h3>Cidade:</h3>
              <input type="text" placeholder=" Adicionar Cidade" />
            </div>
            <div className={styles.logradouro_area}>
              <h3>Logradouro:</h3>
              <input type="text" placeholder=" Adicionar Logradouro" />
            </div>
            <div className={styles.end_area}>
              <h3>Endereço:</h3>
              <input type="text" placeholder=" Adicionar Endereço" />
            </div>
            <div className={styles.comp_area}>
              <h3>Complemento:</h3>
              <input type="text" placeholder=" Adicionar Complemento" />
            </div>
          </div>
        </div>
<Toggle/>
        <div className={styles.btnEntrar}>
          <button id="btnEntrar">Salvar</button>
        </div>
      </div>
    </div>
  );
}
export default Register;
