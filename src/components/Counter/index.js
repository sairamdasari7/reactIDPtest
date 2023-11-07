import {Component} from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>0</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter

/* 

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';

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
    );
  }
}

export default App;

// src/RepoList.js
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchRepositories();
  }

  fetchRepositories = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${this.state.page}`
      );
      this.setState({ repos: response.data.items });
    } catch (error) {
      console.error('Error fetching repositories: ', error);
    }
  };

  nextPage = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => this.fetchRepositories()
    );
  };

  render() {
    return (
      <div>
        <h2>Top GitHub Repositories</h2>
        {this.state.repos.map((repo) => (
          <div key={repo.id}>
            <h3>
              <Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>
            </h3>
            <p>Stars: {repo.stargazers_count}</p>
          </div>
        ))}
        <button onClick={this.nextPage}>Next Page</button>
      </div>
    );
  }
}

export default RepoList;

// src/RepoDetails.js
import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

class RepoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: null,
    };
  }

  componentDidMount() {
    this.fetchRepoDetails();
  }

  fetchRepoDetails = async () => {
    const { owner, name } = useParams();
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${name}`);
      this.setState({ repo: response.data });
    } catch (error) {
      console.error('Error fetching repository details: ', error);
    }
  }

  render() {
    if (!this.state.repo) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>{this.state.repo.full_name}</h2>
        <p>Description: {this.state.repo.description}</p>
        <p>Stars: {this.state.repo.stargazers_count}</p>
        <p>Language: {this.state.repo.language}</p>
        <p>URL: <a href={this.state.repo.html_url}>{this.state.repo.html_url}</a></p>
      </div>
    );
  }
}

export default RepoDetails;

 */

// src/RepoList.js

/* import React from 'react'
import {Link} from 'react-router-dom'

class RepoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      page: 1,
    }
  }

  componentDidMount() {
    this.fetchRepositories()
  }

  fetchRepositories = () => {
    const apiUrl = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${this.state.page}`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({repos: data.items})
      })
      .catch(error => {
        console.error('Error fetching repositories: ', error)
      })
  }

  nextPage = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => this.fetchRepositories(),
    )
  }

  render() {
    return (
      <div>
        <h2>Top GitHub Repositories</h2>
        {this.state.repos.map(repo => (
          <div key={repo.id}>
            <h3>
              <Link to={`/repo/${repo.owner.login}/${repo.name}`}>
                {repo.name}
              </Link>
            </h3>
            <p>Stars: {repo.stargazers_count}</p>
          </div>
        ))}
        <button onClick={this.nextPage}>Next Page</button>
      </div>
    )
  }
}

export default RepoList */

// src/RepoDetails.js

/* import React from 'react'
import {useParams} from 'react-router-dom'

class RepoDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repo: null,
    }
  }

  componentDidMount() {
    this.fetchRepoDetails()
  }

  fetchRepoDetails = () => {
    const {owner, name} = useParams()
    const apiUrl = `https://api.github.com/repos/${owner}/${name}`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({repo: data})
      })
      .catch(error => {
        console.error('Error fetching repository details: ', error)
      })
  }

  render() {
    if (!this.state.repo) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <h2>{this.state.repo.full_name}</h2>
        <p>Description: {this.state.repo.description}</p>
        <p>Stars: {this.state.repo.stargazers_count}</p>
        <p>Language: {this.state.repo.language}</p>
        <p>
          URL: <a href={this.state.repo.html_url}>{this.state.repo.html_url}</a>
        </p>
      </div>
    )
  }
}

export default RepoDetails
*/
