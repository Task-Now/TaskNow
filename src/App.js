import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";

import './globals.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
