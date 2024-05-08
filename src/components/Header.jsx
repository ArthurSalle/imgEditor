import { useContext } from "react"
import { ImgContext } from "../context/context"

export default function Header() {
  const { image } = useContext(ImgContext)

  return (
    <div className="p-6 border-b-2 flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Img Editor</h1>
      <span>{image ? image.name : "Aucune image seclectionnée"}</span>
    </div>
  )
}
