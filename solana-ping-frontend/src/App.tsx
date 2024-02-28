
import './App.css'
import WalletContextProvider from './components/WalletContextProvider'
import { AppBar } from './components/AppBar'
import { PingButton } from './components/PingButton'
import { From } from './components/Form'

function App() {

  return (
    <>
      <div className='app'>
        <WalletContextProvider>
          <AppBar />
          <div>
          <PingButton />
          <From />
        </div>
        </WalletContextProvider>
      </div>
    </>
  )
}

export default App
