
import './App.css';
import './assets/css/calculator.css';
import { Route,Routes } from 'react-router-dom';
import Heading from './components/Heading'
import Nav from './components/Nav'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import Promo from './components/Promo'
import Footer from './components/Footer'
import Btn from './components/Btn';
import DarkMode from './components/DarkMode';
import RandomNum from './components/RandomNum';
import InputField from './components/InputField';
import FormWithState from './components/FormWithState';
import MealsApp from './components/MealsApp';
import Essay from './components/contextApi/Essay';
import ContextChallenge from './components/contextChallenge/App'
import Calculator from './components/calculatorApp/App' 


function App() { 
  return (
  <div>
    <div> 
      <Calculator/>
    </div>
    <ContextChallenge/> 
    <Essay/>
    <MealsApp/>
    <FormWithState/> 
    <InputField/>
    <RandomNum/> 
    <DarkMode/>
    <Btn/>
  <Heading name="Anna" color="purple" />
  <Nav />
  <Promo/>
  <Intro1 />
  <Intro2/>
  <Intro3/>
  <Footer/>
  </div>
  );

  
}

export default App;
