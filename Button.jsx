
import "./Button.css"
const Button = ({onClick,children})=>{
  return (
    <button className="button2" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
