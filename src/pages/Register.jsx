import Logo from "../assets/globo 1.svg";
import styles from '../styles/register.module.css'; 

export function Register() {
  return(
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.logo}>
              <img className={styles.img} src={Logo} alt="" />
            </div>
            <div className={styles.title}>
                <h1 className={styles.h1}>Criar Conta</h1>
            </div>
        </div>
        <div className={styles.container_register}>
              <div className="perfil">
                <h1>Perfil</h1>
              </div>
              <div className={styles.register_area}>
              <div className={styles.cnpj_area}>
                <h3>CNPJ:</h3>
                <input type="text" 
                placeholder=" Adicionar CNPJ"
                />
              </div>
              <div className={styles.email_area}>
                <h3>Email:</h3>
                <input type="text" 
                placeholder=" Adicionar Email"
                />
              </div>
              <div className={styles.password_area}>
                <h3>Senha:</h3>
                <input type="text" 
                placeholder=" Adicionar Senha"
                />
              </div>
              <div className={styles.confPasswword_area}>
                <h3>Confirmar Senha:</h3>
                <input type="text" 
                placeholder=" Adicionar CNPJ"
                />
              </div>
              <div className={styles.socialReason_area}>
                <h3>Razão Social:</h3>
                <input type="text" 
                placeholder=" Adicionar Razão Social"
                />
              </div>
              <div className={styles.ie_area}>
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