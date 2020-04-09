import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulaire from './components/formulaire'
import { Input, Button } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './connexion';
import SignUp from './inscription';

class App extends Component {
  state = {
    user: '',
    mdp: ''
  }

  handleChange_user = event => {
    const user = event.target.value
    this.setState({ user })
    console.log(user)
  }

  handleChange_mdp = event => {
    const mdp = event.target.value
    this.setState({ mdp })
    console.log(mdp)
  }

  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Bienvenue sur mon shop.
                  </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réalisé avec React
                  </a>
              <div>
                <Button type='primary' href='/connexion'>Se connecter</Button>
                <Button type='primary' href='inscription'>S'inscrire</Button>
              </div>
              <div>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/connexion' component={Login} />
                <Route exact path='/inscription' component={SignUp} />
              </div>
              {/* <Input
                addonBefore='Utilisateur'
                value={this.state.user}
                onChange={this.handleChange_user}
              />
              <Input
                addonBefore='Mot de passe'
                type='password'
                value={this.state.mdp}
                onChange={this.handleChange_mdp}
              />
              <Formulaire /> */}
            </header>
          </div>
        </Router>
      </AuthProvider>
    )
  }
}


export default App;
