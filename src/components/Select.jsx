import { useContext } from "react"
import { ImgContext } from "../context/context"
import { Images } from "../data/data"

export default function Select() {
  const { image, setImage } = useContext(ImgContext)

  function handleChange(event) {
    const selectedImg = Images.find((img) => img.name === event.target.value)

    setImage(selectedImg)
  }

  return (
    <div className="flex flex-col gap-2 max-w-xs">
      <select
        id="imgs"
        value={image.name}
        onChange={handleChange}
        className="py-2 px-4 border-2 border-gray-200 rounded"
      >
        {Images.map((img) => {
          return (
            <option key={img.id} value={img.name}>
              {img.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
