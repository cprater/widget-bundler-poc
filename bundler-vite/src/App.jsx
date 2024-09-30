import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './vite.svg'
import { Button } from '@mui/material';
import './App.css'


function App({ name = '', withDelayedMessage = false }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <div>
        <h1>Hello, {name}!</h1>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Hello from the widget bundler</h1>

      {withDelayedMessage && (
        <>
          <Button onClick={() => setShowMessage(true)}>
            Show the thing
          </Button>

          {showMessage && <div id="delayedMessage">Message loading</div>}
        </>
      )}

    </>
  )
}

export default App
