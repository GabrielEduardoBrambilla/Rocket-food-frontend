import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/home'
import { CreateDish } from '../pages/createDish'
import { EditDish } from '../pages/editDish'
import { DisplayDish } from '../pages/displayDish'
import { Order } from '../pages/order'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/createdish' element={<CreateDish />} />
      <Route path='/editdish/:id' element={<EditDish />} />
      <Route path='/displaydish/:id' element={<DisplayDish />} />
      <Route path='/order' element={<Order />} />
    </Routes>
  )
}