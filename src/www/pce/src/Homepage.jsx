import './App.css';
import Homenav from './Components/Homenav';
import Homecatalog from './Components/Homecatalog';
import Homefooter from './Components/Homefooter';


function Homepage() {
  return (
    <div>
      <Homenav/>
      <div>
        <Homecatalog />
        </div>
        <div>
          <Homefooter />
          </div>
           
      </div>
    
    );
}

export default Homepage;
