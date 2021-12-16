import {Link, withRouter} from 'react-router-dom'

import Cookie from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    console.log(history)
    history.replace('/login')
  }

  const handleClick = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          onClick={handleClick}
        />
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>

          <Link to="/jobs" className="nav-link">
            <li>Jobs</li>
          </Link>
        </ul>
        {/* <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <img src="" alt="" />
          </Link>

          <Link to="/jobs" className="nav-link">
            <li>Jobs</li>
          </Link>
        </ul> */}
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
