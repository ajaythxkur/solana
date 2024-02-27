
import './App.css'
import WalletContextProvider from './components/WalletContextProvider'
import { AppBar } from './components/AppBar'
import { PingButton } from './components/PingButton'

function App() {

  return (
    <>
      <div className='app'>
        <WalletContextProvider>
          <AppBar />
          <div>
          <PingButton />
        </div>
        </WalletContextProvider>
      </div>
    </>
  )
}

export default App
