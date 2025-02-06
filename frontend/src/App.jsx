import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Insertion from "./insertion"
import Accueil from "./accueil.jsx"
import Modiffication from "./modiffication"


function App() {
  return (
    <>
      <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/insertion' element={<Insertion/>}/>
          <Route path='/modiffication/:id' element={<Modiffication/>}/>
        </Routes>
       </BrowserRouter> 
      </div>
    </>
  )
}

export default App
