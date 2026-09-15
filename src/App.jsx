import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Philosophy from './pages/Philosophy' 
import MclResearch from './pages/MclResearch'
import MclDs from './pages/MclDs'
import Budder from './pages/Budder'

export default function App() {

  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="philosophy" element={<Philosophy />}/>
        <Route path='projects'>
          <Route path='mclResearch' element={<MclResearch />} />
          <Route path='mclDs' element={<MclDs />} />
          <Route path='budder' element={<Budder />} />
        </Route>
      </Route>
    </Routes>
  )
}
