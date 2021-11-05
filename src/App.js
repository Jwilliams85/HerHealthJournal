import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import LoginForm from './components/login/LoginForm';
import Register from './components/register/Register'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/LoginForm' component={LoginForm} />
          <Route path='/Register' component ={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
