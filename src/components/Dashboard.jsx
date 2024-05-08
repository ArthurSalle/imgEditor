import ImgCard from "./ImgCard"
import Select from "./Select"
import Toolbar from "./Toolbar"
import { useReducer } from "react"

export default function Dashboard() {
  const initialState = {
    isFlip: false,
    isBlackWhite: false,
    rotationDeg: 0,
  }

  function reducer(state, action) {
    switch (action.type) {
      case "set_flip": {
        return {
          ...state,
          isFlip: !state.isFlip,
        }
      }
      case "set_blackWhite": {
        return {
          ...state,
          isBlackWhite: !state.isBlackWhite,
        }
      }
      case "set_rotation": {
        return {
          ...state,
          rotationDeg: action.newRotationDeg,
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function handleFlip() {
    dispatch({ type: "set_flip" })
  }
  function handleBlackWhite() {
    dispatch({ type: "set_blackWhite" })
  }
  function handleRotation(newDeg) {
    dispatch({ type: "set_rotation", newRotationDeg: newDeg })
  }

  return (
    <>
      <div className="m-4 p-2 border-2 rounded h-fit">
        <Select />

        <div className="flex flex-col items-center gap-12 h-fit">
          <ImgCard flip={state.isFlip} blackWhite={state.isBlackWhite} rotation={state.rotationDeg} />

          <Toolbar
            setFlip={handleFlip}
            setBlackWhite={handleBlackWhite}
            rotation={state.rotationDeg}
            setRotation={handleRotation}
          />
        </div>
      </div>
    </>
  )
}
