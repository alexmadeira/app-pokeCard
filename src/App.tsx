import { PokeCard } from './components/PokeCard'
import { FindInput } from './components/FindInput'

import { PokeProvider } from './context/PokeContext'

import { Container } from './styles/app'

export function App() {
  return (
    <Container>
      <PokeProvider>
        <FindInput />
        <PokeCard />
      </PokeProvider>
    </Container>
  )
}
