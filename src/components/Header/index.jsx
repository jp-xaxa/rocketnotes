import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useAuth } from "../../hooks/auth"

export function Header() {
  const { user, signOut } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
