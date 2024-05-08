import { Images } from "../data/data.js"
import ImgCard from "./ImgCard"

export default function ImgList() {
  return (
    <div className="flex flex-col md:flex-row gap-6 flex-wrap p-6 sm:p-16">
      {Images.map((img) => {
        return <ImgCard src={img.src} name={img.name} key={img.id} />
      })}
    </div>
  )
}
