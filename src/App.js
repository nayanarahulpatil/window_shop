import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import  Window_data from './Container/Window_data';


function App() {
  return (
    <>
  
<Router>

< Window_data></Window_data>

</Router>

    </>
  );
}

export default App;
