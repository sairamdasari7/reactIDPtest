/* import React, {Component} from 'react'

class UserLists extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const api_data = fetch(
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc',
    )
      .then(response => response.json())
      .then(data => this.setState({items: data}))
      .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div>
        <h2>User Lists</h2>
        <ul>
          {this.state.items.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UserLists */

import React, {Component} from 'react'

class UserLists extends Component {
  // Constructor
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      DataisLoaded: false,
    }
  }

  componentDidMount() {
    fetch(
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc',
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          DataisLoaded: true,
        })
      })
  }

  render() {
    const {DataisLoaded, items} = this.state
    console.log(items)
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      )

    return (
      <div className="App">
        <h1 className="repo">Repos Starred</h1>
        <h3>Fetch data from an api in react</h3>
        <div className="container">
          {items.map(item => (
            <div className="item">
              <ol key={item.id}>
                <div>
                  <strong>{'User_Name: '}</strong>
                  {item.name},
                </div>
                <div>Full_Name: {item.name},</div>
                <div>Description: {item.full_name}</div>
              </ol>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default UserLists
