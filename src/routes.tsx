import { Routes, Route } from 'react-router-dom'

import Home from './components/Pages/Home'
import Categories from './components/Pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
