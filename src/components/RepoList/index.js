import React from 'react'
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

export default RepoList
