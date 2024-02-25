import { Container } from "./styles"

export function LinkText({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" $isactive={isActive} {...rest}>
      {title}
    </Container>
  )
}
