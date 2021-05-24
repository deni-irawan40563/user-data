import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../../Views/Home/Home';
import NotFound from '../../Views/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={NotFound} exact />
      </Switch>
    </Router>
  );
}

export default App;
