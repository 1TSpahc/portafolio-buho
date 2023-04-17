import { ContextProvider } from './Context/ContextProvider'
import { Route } from 'wouter'
import { Home } from './Pages/Home'
import { Details } from './Pages/Details'

function App () {
  return (
    <>
      <ContextProvider>
        <Route path='/' component={Home} />
        <Route path='/project/:id' component={Details} />
      </ContextProvider>
    </>
  )
}

export default App
