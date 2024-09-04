import { Container,Button } from 'react-bootstrap'
import Frase from './components/Frase'
import './App.css'
import logo from './assets/logosimpson.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <Container className='text-center my-5'>
      <img src={logo} alt="Logo simpsons" className='w-50 mb-4'/>
      <Frase></Frase>
      <Button variant="warning" >Enviar</Button>
    </Container>
  )
}

export default App
