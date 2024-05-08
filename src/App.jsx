import { useState } from "react"
import Header from "./components/Header"
import { ImgContext } from "./context/context"
import Dashboard from "./components/Dashboard"
import { Images } from "./data/data"

function App() {
  const [image, setImage] = useState(Images[3])
  const imgValue = { image, setImage }

  return (
    <ImgContext.Provider value={imgValue}>
      <div className="h-screen">
        <Header />
        <Dashboard key={image.id} />
      </div>
    </ImgContext.Provider>
  )
}

export default App
