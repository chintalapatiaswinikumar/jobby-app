<<<<<<< HEAD
import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1>Page Not Found</h1>
        <p>we’re sorry, the page you requested could not be found</p>
      </div>
    )
  }
}
=======
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png "
      alt="not found"
      className="not-found-img"
    />
    <h1>Page Not Found</h1>
    <p>we’re sorry, the page you requested could not be found</p>
  </div>
)

>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
export default NotFound
