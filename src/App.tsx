import { PokeCard } from './components/PokeCard'

import { Container, FindInput } from './styles/app'
export function App() {
  return (
    <Container>
      <FindInput type="text" placeholder="Find Pokemon" />
      <PokeCard />
    </Container>
  )
}
