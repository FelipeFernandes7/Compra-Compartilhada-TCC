
import styles from "../styles/register.module.css";



export function Register() {
  return (
    <div className={styles.containerForm}>
    <header className={styles.header}>
      
    </header>
      <form action="">

    <div className={styles.container}>
        <h1>
          Cadastro do <span>Fornecedor</span>
        </h1>

        <div className={styles.caixa}>
          <div className={styles.minContainer}>
            <h4>Nome Fantasia</h4>
            <div className={styles.info}>
            <input placeholder={"Insira Nome Fantasia"} />
            </div>
          </div>

          <div className={styles.minContainer}>
            <h4>Cidade</h4>
            <div className={styles.info}>
              <input placeholder={"Insira a Cidade"} />
            </div>
          </div>
        </div>

        <div className={styles.caixa}>
          <div className={styles.minContainer}>
            <h4>Nome</h4>
            <div className={styles.info}>
              <input placeholder={"Insira o Nome"} />
            </div>
          </div>

          <div className={styles.minContainer}>
            <h4>Complemento</h4>
            <div className={styles.info}>
              <input placeholder={" Insira o Complemento"} />
            </div>
          </div>
        </div>

        <div className={styles.caixa}>
          <div className={styles.minContainer}>
            <h4>CNPJ</h4>
            <div className={styles.info}>
              <input placeholder={"Insira o CNPJ"} />
        
            </div>
          </div>

          <div className={styles.minContainer}>
            <h4>Código Postal</h4>
            <div className={styles.info}>
              <input placeholder={"Insira o Código Postal"} />
            </div>
          </div>
        </div>

        <div className={styles.caixa}>
          <div className={styles.minContainer}>
            <h4>Email</h4>
            <div className={styles.info}>
              <input placeholder={"Insira o E-mail"} />
            </div>
          </div>

          <div className={styles.minContainer}>
            <h4>Rua</h4>
            <div className={styles.info}>
              <input placeholder={"Insira a Rua"} />
            </div>
          </div>
        </div>

        <div className={styles.caixa}>
          <div className={styles.minContainer}>
            <h4>Celular</h4>
            <div className={styles.info}>
              <input placeholder={"Insira o Nº Celular"} />
            </div>
          </div>

          <div className={styles.minContainer}>
            <h4>Número</h4>
            <div className={styles.info}>
              <input placeholder={"Insira o Número Complemento"} />
            </div>
          </div>
        </div>

        <div className={styles.caixa}>
          <div className={styles.minContainer}>
            <h4>Nome Fantasia</h4>
            <div className={styles.info}>
            <input placeholder={"Insira Nome Fantasia"} />
            </div>
          </div>

          <div className={styles.minContainer}>
            <h4>Cidade</h4>
            <div className={styles.info}>
              <input placeholder={"Insira a Cidade"} />
            </div>
          </div>
        </div>

        <div className={styles.caixa}>
          <div className={styles.minContainer}>
            <h4>Nome Fantasia</h4>
            <div className={styles.info}>
            <input placeholder={"Insira Nome Fantasia"} />
            </div>
          </div>

          <div className={styles.minContainer}>
            <h4>Cidade</h4>
            <div className={styles.info}>
              <input placeholder={"Insira a Cidade"} />
            </div>
          </div>
        </div>

        <div className={styles.caixa}>
          <div className={styles.minContainer}>
            <h4>Telefone</h4>
            <div className={styles.info}>
              <input placeholder={"Insira o Telefone"} />
            </div>
          </div>

          <div className={styles.minContainer}>
            <h4>Estado</h4>
            <div className={styles.info}>
              <select>
          <option selected value="State">
            SP
          </option>
          <option value="State">RJ</option>
          <option value="State">AM</option>
          <option value="State">RS</option>
        </select>
            </div>
          </div>
        </div>
    </div>
      </form>
  </div>
  );
}
export default Register;
