import {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-heading-container">
          <h1 className="main-heading">Most Starred Repos</h1>
        </div>
        <div className="repos-card">
          <div className="sub-card-1">
            <img
              src="https://avatars.githubusercontent.com/u/7560860?v=4"
              alt="avatar"
              className="avatar-image"
            />
          </div>
          <div className="sub-card-2">
            <div className="mini-card-1">
              <h1 className="mini-card-heading"> redux-react-hook </h1>
              <p className="mini-card-para">
                React Hook for accessing state and dispatch from a Redux store
              </p>
            </div>
            <div className="mini-card-2">
              <div className="mini-card-description-container">
                <p className="mini-card-description">No of Stars</p>
              </div>
              <div className="mini-card-description-container">
                <p className="mini-card-description">No of Issues</p>
              </div>
              <div className="mini-card-description-container">
                <p className="mini-card-description">Last published details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
