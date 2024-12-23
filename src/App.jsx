
import './App.css'
import Faq from './components/FAQs/Faq'
import Feature from './components/Feature/Feature'
import Footer from './components/Footer/Footer'
import Heroarea from './components/Herosection/Heroarea'
import Mission from './components/Mision/Mission'
import Navbar from './components/Navbar/Navbar'
import Vission from './components/Vission/Vission'

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Heroarea></Heroarea>
      <Mission></Mission>
      <Feature></Feature>
      <Vission></Vission>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  )
}

export default App
