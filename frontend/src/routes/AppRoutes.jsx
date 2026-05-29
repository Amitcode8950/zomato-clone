import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserRegister from '../pages/user/UserRegister'
import UserLogin from '../pages/user/UserLogin'
import UserFoodFeed from '../pages/user/UserFoodFeed'
import PartnerProfile from '../pages/user/PartnerProfile'
import FoodPartnerRegister from '../pages/food-partner/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/food-partner/FoodPartnerLogin'
import PartnerDashboard from '../pages/food-partner/PartnerDashboard'
import CreateFood from '../pages/food-partner/CreateFood'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/register' element={<UserRegister />} />
        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/user/food' element={<UserFoodFeed />} />
        <Route path='/partner/:partnerId' element={<PartnerProfile />} />
        <Route path='/food-partner/register' element={<FoodPartnerRegister />} />
        <Route path='/food-partner/login' element={<FoodPartnerLogin />} />
        <Route path='/food-partner/dashboard' element={<PartnerDashboard />} />
        <Route path='/food-partner/create-food' element={<CreateFood />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
