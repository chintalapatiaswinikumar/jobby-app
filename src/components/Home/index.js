import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'
<<<<<<< HEAD
import Cookies from 'js-cookie'
=======
import Cookie from 'js-cookie'
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82

class Home extends Component {
  handleJobsClick = () => {
    console.log(this.props)
    const {history} = this.props
    history.push('/jobs')
  }

<<<<<<< HEAD
  handleClick = () => {
    const {history} = this.props
    history.push('/')
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
=======
  onClickLogout = () => {
    Cookie.remove('jwt_token')
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
    const {history} = this.props
    console.log(history)
    history.replace('/login')
  }

<<<<<<< HEAD
  render() {
    return (
      <>
        <nav className="nav-header">
          <div className="nav-content">
            <Link to="/" className="nav-link">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
              />
            </Link>
            <ul className="nav-menu">
              <Link to="/" className="nav-link">
                <li>Home</li>
              </Link>

              <Link to="/jobs" className="nav-link">
                <li>Jobs</li>
              </Link>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </ul>

            {/*  <li>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </li>
 */}
            <li>
              <button
                type="button"
                className="logout-mobile-btn"
                onClick={this.onClickLogout}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                  alt="logout icon"
                  className="logout-icon"
                />
              </button>
            </li>
          </div>
        </nav>
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">Find The Job That Fits Your Life</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-sm-bg.png"
              alt="clothes to be noticed"
              className="home-mobile-img"
            />
            <p className="home-description">
              Millions of people are searching for jobs,salary
              information,company reviews,Find the job that fits your abilities
              and potential.
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
      </>
=======
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
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
    )
  }
}
export default Home
