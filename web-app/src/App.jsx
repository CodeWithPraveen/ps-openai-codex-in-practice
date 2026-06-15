import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Orders from './pages/Orders'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders/:id" element={<Orders />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
