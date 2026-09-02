import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Philosophy from './pages/Philosophy' 
import MclResearch from './pages/MclResearch'

export default function App() {

  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="philosophy" element={<Philosophy />}/>
        <Route path='projects'>
          <Route path='mclResearch' element={<MclResearch />} />
          <Route path='mclDs' element={<h1>design system</h1>} />
          <Route path='budder' element={<h1>mcl research</h1>} />
        </Route>
      </Route>
    </Routes>
  )
}
