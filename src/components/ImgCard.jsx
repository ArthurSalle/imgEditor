import { useContext } from "react"
import { ImgContext } from "../context/context"

export default function ImgCard({ flip, blackWhite, rotation }) {
  const { image } = useContext(ImgContext)

  let rotationClass = "rotate-0"

  switch (rotation) {
    case 0:
      rotationClass = "rotate-0"
      break
    case 90:
      rotationClass = "rotate-90"
      break
    case 180:
      rotationClass = "rotate-180"
      break
    case 270:
      rotationClass = "rotate-[270deg]"
      break
    case 360:
      rotationClass = "rotate-0"
      break
    default:
      rotationClass = "rotate-0"
      break
  }

  return (
    <div className={`w-fit mt-4 p-4 border border-gray-200 rounded shadow ${rotationClass}`}>
      <img
        src={image.src}
        alt={image.name}
        className={`h-96 ${flip ? "-scale-x-100" : ""} ${blackWhite ? "grayscale" : ""} `}
      />
    </div>
  )
}
