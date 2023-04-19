import { ContextProvider } from './Context/ContextProvider'
import { Route } from 'wouter'
import { Home } from './Pages/Home'

function App () {
  return (
    <>
      <ContextProvider>
        <Route path='/' component={Home} />
      </ContextProvider>
    </>
  )
}

export default App
