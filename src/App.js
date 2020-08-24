import React from 'react';
import Headers from './components/Headers/Headers'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './pages/Register/Register'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
import Login from './pages/Login/Login'

function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <Router>
      <Switch>
     <Route exact path='/' component={Headers}/>
     <Route exact path='/register' component={Register}/>
     <Route exact path='/login' component={Login}/>
     </Switch>
     </Router>
     </Provider>
  );
}

export default App;
