import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'
import Cookie from 'js-cookie'

class Home extends Component {
  handleJobsClick = () => {
    console.log(this.props)
    const {history} = this.props
    history.push('/jobs')
  }

  onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = this.props
    console.log(history)
    history.replace('/login')
  }

  handleClick = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-sm-bg.png"
            alt="clothes to be noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Millions of people are searching for jobs,salary information,company
            reviews,Find the job that fits your abilities and potential.
          </p>
          <Link to="/jobs">
            <button
              type="button"
              className="shop-now-button"
              onClick={this.handleJobsClick}
            >
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
export default Home
