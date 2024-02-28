
import './App.css'
import WalletContextProvider from './components/WalletContextProvider'
import { AppBar } from './components/AppBar'
import { PingButton } from './components/PingButton'
import { From } from './components/Form'
import { MovieList } from './components/MovieList'

function App() {

  return (
    <>
      <div className='app'>
        <WalletContextProvider>
          <AppBar />
          <div>
          <PingButton />
          <From />
          <MovieList />
        </div>
        </WalletContextProvider>
      </div>
    </>
  )
}

export default App
