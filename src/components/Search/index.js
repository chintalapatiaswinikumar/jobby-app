import {Component} from 'react'
import './index.css'

class Search extends Component {
  state = {
    searchText: '',
  }

  handleInputChange = e => {
    console.log('changed', e.target.value)
    this.setState({searchText: e.target.value})
  }

  handleClick = () => {
    const {searchText} = this.state
    const {searchClick} = this.props
    searchClick(searchText)
  }

  render() {
    return (
      <div>
        <div className="search-input-container">
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            onChange={this.handleInputChange}
          />
          <div className="icon-box">
            <button type="button" className="search-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
                alt="search icon"
                className="search-icon"
                onClick={this.handleClick}
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Search
