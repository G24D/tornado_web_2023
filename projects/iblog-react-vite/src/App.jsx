import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cards from "./components/Cards"


function App() {

  return (
    <div className="grid grid-cols-[350px_minmax(900px,_1fr)] grid-rows-[120px_minmax(900px,_1fr)_190px] w-[1450px] mx-auto h-[1750px]" >
      <Sidebar />
      <Header/>
      <Cards/>
      <Footer />
    </div>
  )
}

export default App
