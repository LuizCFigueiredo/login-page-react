import Button from "../components/Forms/Button/Button";
import Input from "../components/Forms/Input/Input";
import styles from "./LoginPage.module.css";
import { useState } from "react";

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
    <main className={styles.main}>
      <form className={styles.formConteiner} onSubmit={PegarLogin}>
        <p>Welcome Back</p>
        <div className={styles.conteinerLogin}>
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
          <span className={styles.forgetPassword}>Forget password?</span>
          <Button id="button" value="Sign in" />
        </div>
      </form>
    </main>
  )
}

export default LoginPage;
