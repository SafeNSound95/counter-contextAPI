import { useContext } from "react"
import CounterContext from "../CounterContext"

const Button = ({ label, type }) => {
  const [counter, counterDispatch] = useContext(CounterContext)
  return <button onClick={() => counterDispatch({type})}>{label}</button>
}

export default Button