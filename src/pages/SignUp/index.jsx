import { useState } from "react"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Form, BackgroundImg } from "./styles"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.")
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <Container>
      <BackgroundImg />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <ButtonText title={"Voltar para o login"} onClick={handleBack} className="back"/>
      </Form>
    </Container>
  )
}
