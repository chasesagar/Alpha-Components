import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Card from './Components/Glassmorphism/Card/Card';
import { Calculator } from './Components/Glassmorphism/Calculator/Calculator';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/glass/card" component={Card} />
          <Route path="/glass/calculator" component={Calculator} />
        </Switch>
      </Router>
    </>
  );
}

const Home = () => {
  return (
    <div>
      <h3>I am Home component</h3>
    </div>
  )
}

export default App;
