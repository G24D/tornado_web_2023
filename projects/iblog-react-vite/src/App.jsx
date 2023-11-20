import Sidebar from "./Sidebar"
import Header from "./Header"
import Cards from "./Cards"
import Footer from "./Footer"


function App() {

  return (
    <div className="grid grid-cols-[350px_minmax(900px,_1fr)] grid-rows-[120px_minmax(900px,_1fr)_190px] w-[1450px] mx-auto h-[1750px]" >
      <Sidebar  />
      <Header/>
      <Cards  />
      <Footer />
    </div>
  )
}


export default App
