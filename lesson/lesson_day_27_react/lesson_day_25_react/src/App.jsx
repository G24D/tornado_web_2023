import './App.css'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Footer from './Footer'

function App() {

  const dogs = ['hehe', 'hehedsad', 'ahah'];
  let number = 0;
  

  return (
    <div className='App'>
      <Navbar />
      <MainContent />
      <Footer />
      {dogs[0]}
    </div>
  )
}

export default App
