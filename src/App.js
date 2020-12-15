
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Educations from './components/Educations';
import Experience from './components/Experiences';
import Portfollos from './components/Portfollos';
import About from './components/About';

 

function App() {
  return (
    <Router>
      <>
      <Route exact path="/" component={Home}/>
      <Switch>
        <Route path='/About' component={About}/>
        <Route path='/skills' component={Skills} />
        <Route path='/Educations' component={Educations} />
        <Route path='/Experiences' component={Experience} />
        <Route path='/Portfollos' component={Portfollos} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
