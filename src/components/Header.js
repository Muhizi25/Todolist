
import props from 'prop-types'
import Button from './Button'
const Header = ({title,onAdd,showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
       <Button color = {showAdd ? 'red':'green'} text = {showAdd ? 'Close':'Add'} onClick={onAdd}/>
    </header>
  )
}
Header.defaultProps ={
    title : 'Task Tracker'
}
Header.props = {
    title:props.string.isRequired,
}
export default Header
