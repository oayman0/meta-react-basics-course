import logo from '../logo512.png'

function Heading(props){
    return (
      <>
<h1 style={{color:props.color,fontSize:"40px"}}>Hello {props.name}</h1>
<img src={logo} alt="imageee" />
    </>
    )
    

  }

  export default Heading;