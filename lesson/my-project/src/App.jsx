import ImageContainer from "./ImageContainer"

function App() {

  return (
    <div>
        <ImageContainer imgSrc={'./img/img1.jpg'} containerId={'img1'} altText={'something something'}/>
        <ImageContainer imgSrc={'./img/img2.jpg'} containerId={'img2'} altText={'something something'}/>
        <ImageContainer imgSrc={'./img/img3.jpg'} containerId={'img3'} altText={'something something'}/>
    </div>
  )
}

export default App
