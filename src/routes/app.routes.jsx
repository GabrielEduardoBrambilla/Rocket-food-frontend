import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { CreateDish } from '../pages/createDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/createdish' element={<CreateDish />} />
    </Routes>
  )
}