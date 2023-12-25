import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './screens/Home';
import User from './screens/User';
import History from './screens/History';
import Contact from './screens/Contact';
import Transfer from './screens/Transfer';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
  return <Router>
    <Routes>
      <Route exact path="/" element={<Home />} ></Route>
      <Route exact path="/user" element={<User />}></Route>
      <Route exact path='/history' element={<History />}></Route>
      <Route exact path='/transfer' element={<Transfer />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>

    </Routes>

  </Router>

}

export default App;
