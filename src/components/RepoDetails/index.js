import React from 'react'
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
