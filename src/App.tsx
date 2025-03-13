import './App.css'
import { Route, Routes } from "react-router-dom";
import Market from './pages/Market';
import Landingpage from './components/Landingpage';


function App() {

  return (

      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/market" element={< Market/>} />
      </Routes>
 
  )
}

export default App
