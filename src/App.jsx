import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import DevInfo from './DevInfo'
import './App.css'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="/game" element={<Game />}/>
          <Route path="/info" element={<DevInfo />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
