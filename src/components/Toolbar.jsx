import { RotateCwSquare } from "lucide-react"
import { Contrast } from "lucide-react"
import { ArrowRightLeft } from "lucide-react"

export default function Toolbar({ setFlip, setBlackWhite, rotation, setRotation }) {
  function handleRotationClick() {
    if (rotation < 270) {
      setRotation(rotation + 90)
    } else {
      setRotation(0)
    }
  }

  return (
    <div className="flex items-center gap-6 p-4 border rounded">
      <button onClick={setFlip}>
        <ArrowRightLeft />
      </button>

      <button onClick={setBlackWhite}>
        <Contrast />
      </button>

      <button onClick={handleRotationClick}>
        <RotateCwSquare />
      </button>
    </div>
  )
}
