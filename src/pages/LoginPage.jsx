import Button from "../components/Forms/Button/Button";
import Input from "../components/Forms/Input/Input";
import styles from "./LoginPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import MinhaImagem from "../images/imagem_2024-04-26_140952126-removebg-preview.png"

function LoginPage() {
  localStorage.setItem("emailTeste", "teste123@gmail.com");
  localStorage.setItem("senhaTeste", "teste123");

  function PegarLogin(e) {
    e.preventDefault();
    if (emailInput.trim() === "" || passwordInput.trim() === "") {
      alert("Por favor, preencha o campo obrigatório.");
    } else if (
      emailInput === localStorage.getItem("emailTeste") &&
      passwordInput === localStorage.getItem("senhaTeste")
    ) {
      alert("Logado com sucesso :)");
    } else {
      alert("Email ou senha errada :(");
    }
  }

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
      <main>
        <div className={styles.main}>
          <div className={styles.Logo}>

          </div>
          <form className={styles.formConteiner} onSubmit={PegarLogin}>
            <div className={styles.logoContainer}>
              <img className={styles.logotest} src={MinhaImagem} alt="" width="120"></img> 
              <small>technology applications @2024</small>
            </div>
            <div className={styles.conteinerLogin}>
              <h3 className={styles.welcome}>👋 Welcome Back</h3>
              <Input
                label="Email"
                type="email"
                id="email"
                autoComplete="off"
                placeholder="Digite seu email..."
                set={setEmailInput}
              />
              <Input
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                placeholder="Digite sua senha..."
                set={setPasswordInput}
              />
              <div className={styles.forgetPassword}>
                <small className={styles.fP}>Forget password?</small>
              </div>
              
              <Button id="button" value="Sign in" />
            </div>
            <div className={styles.ConteinerLink}>
              <small>Don't you have an account?<Link to='/cadastro' className={styles.Link}><h5 className={styles.SpanLi}>Sign up</h5></Link></small>
            </div>
          </form>
        </div>
      </main>
  )
}

export default LoginPage;
