import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Home, Professionnels, Blog, Exposition, Mouvement } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/professionnels" exact component={() => <Professionnels />} />
          <Route path="/mouvement" exact component={() => <Mouvement />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/exposition" exact component={() => <Exposition />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
