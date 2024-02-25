import { FiPlus } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import { Note } from "../../components/Note"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { LinkText } from "../../components/LinkText"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <LinkText title="Todos" $isactive />
        </li>
        <li>
          <LinkText title="React" />
        </li>
        <li>
          <LinkText title="Nodejs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
