import HomePage from "./Pages/HomePage"
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
  </Routes>
  )
}
