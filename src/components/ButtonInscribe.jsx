import { useState } from "react"
import { toast } from 'react-toastify';

function Botoncito() {

  const [suscribe, setSubscribe] = useState(false)
  return (
  <button
    onClick={() => {
      toast.success("Felicidades ya esta subscrito!!")
      setSubscribe(!suscribe)}}
  >
    { 
      suscribe ? "ya estas inscrito" : "suscribirte"
  }
  </button>

  )

}

export default Botoncito