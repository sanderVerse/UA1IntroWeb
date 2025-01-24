import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'

import Insertion from "./insertion"
import Accueil from "./accueil.jsx"


function App() {

  return (
    <>
      <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil />}/>
          <Route path='/insertion' element={<Insertion/>}/>
        </Routes>
       </BrowserRouter> 
      </div>
    </>
  )
}

export default App
