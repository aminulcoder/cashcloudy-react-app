
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import Faq from './components/FAQs/Faq'
import Feature from './components/Feature/Feature'
import Footer from './components/Footer/Footer'
import Heroarea from './components/Herosection/Heroarea'
import Mission from './components/Mision/Mission'
import Navbar from './components/Navbar/Navbar'
import Vission from './components/Vission/Vission'
import AppLayout from './Layouts/AppLayout'
function App() {


  return (
    <AppLayout >
      <Mission></Mission>
      <Feature></Feature>
      <Vission></Vission>
      <Faq></Faq>
    </AppLayout>
  )
}

export default App




