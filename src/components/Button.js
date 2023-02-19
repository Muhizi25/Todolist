
import props from 'prop-types'

const Button = ({color, text,onClick}) => {
 
  return (
    <div>
       <button onClick={onClick}
        style={{backgroundColor:color}}  className='btn'>{text}</button>
    </div>
  )
}

Button.defaultProps = {
  color:'steelblue',

}



Button.Props = {
  text:props.string,
  color:props.string,
  onClick:props.func
}
export default Button
