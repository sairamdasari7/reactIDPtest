import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RepoList from './components/RepoList'
import RepoDetails from './components/RepoDetails'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>GitHub Repository Explorer</h1>
          <Switch>
            <Route exact path="/" component={RepoList} />
            <Route path="/repo/:owner/:name" component={RepoDetails} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
