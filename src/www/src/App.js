import './App.css';
import Homepage from './Homepage';
import Productlistpage from './Productlistpage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homenav from './Components/Homenav';


function App() {
  return (
    <>
      <Router>
          <Homenav/>
        <Switch>
          <Route path='/' exact>
            <Homepage/>
          </Route>
          <Route path='/results'>
            <Productlistpage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
