import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';


function App() {
  return (
    <div>
      <Switch>

        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>

      </Switch>

    </div>
  );
}

export default App;
