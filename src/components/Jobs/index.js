import {Component} from 'react'
import Cookies from 'js-cookie'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'
import {BsFillStarFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdWork} from 'react-icons/md'
=======
import Loader from 'react-loader-spinner'
import './index.css'
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
import JobCard from '../JobCard'
import Search from '../Search'
import Profile from '../Profile'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    activeList: [],
    jobsList: [],
    salList: [],
    apiStatus: apiStatusConstants.initial,
    searchText: '',
  }

  componentDidMount() {
    this.getJobs()
  }

  handleButtonClick = () => {
    this.getJobs()
  }

<<<<<<< HEAD
  handleClick = () => {
    const {searchText} = this.state
    this.getJobs(searchText)
  }

  getJobs = async search => {
    /*  this.setState({
      apiStatus: apiStatusConstants.inProgress,
    }) */
    const {activeList, salList} = this.state

    const x = activeList.join(',')
    const y = salList.join(',')
    const z = search !== undefined ? search : ''
    console.log('x', x, y, z)

=======
  searchClick = txt => {
    this.getJobs(txt)
  }

  getJobs = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {activeList, salList, searchText} = this.state

    console.log('x', activeList, salList)

    const x = activeList.join(',')
    const y = salList.join(',')
    const z = searchText
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${x}&minimum_package=${y}&search=${z}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.jobs.map(product => ({
        companyLogoUrl: product.company_logo_url,
        employmentType: product.employment_type,
        jobDescription: product.job_description,
        id: product.id,
        location: product.location,
        packagePerAnnum: product.package_per_annum,
        rating: product.rating,
        title: product.title,
      }))
      this.setState({
        jobsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

<<<<<<< HEAD
  handleInputChange = e => {
    console.log('changed', e.target.value)
    this.setState({searchText: e.target.value})
  }

  activeId = ids => {
=======
  activeId = ids => {
    const {activeList} = this.state
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
    this.setState({activeList: ids}, this.getJobs)
  }

  salId = id => {
<<<<<<< HEAD
=======
    const {salList} = this.state
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
    this.setState({salList: id}, this.getJobs)
  }

  renderJobsList = () => {
<<<<<<< HEAD
    const {jobsList, searchText} = this.state
=======
    const {jobsList} = this.state
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82

    return (
      <div>
        {jobsList.length > 0 ? (
<<<<<<< HEAD
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
                </ul>

                <li>
                  <button
                    type="button"
                    className="logout-desktop-btn"
                    onClick={this.onClickLogout}
                  >
                    Logout
                  </button>
                </li>

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
            <div className="product-sections">
              {console.log('above profile')}
              <Profile activeId={this.activeId} salId={this.salId} />
              {console.log('after profile')}
              <div className="products-loader-container">
                <div>
                  <div className="search-input-container">
                    <input
                      type="search"
                      placeholder="Search"
                      className="search-input"
                      onChange={this.handleInputChange}
                    />
                    <div className="icon-box">
                      <button
                        type="button"
                        className="search-button"
                        testid="searchButton"
                      >
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
                <ul className="products-list">
                  {jobsList.map(job => {
                    const {
                      id,
                      companyLogoUrl,
                      title,
                      rating,
                      location,
                      employmentType,
                      packagePerAnnum,
                      jobDescription,
                    } = job
                    return (
                      <li className="card-container" key={id}>
                        <Link to={`/jobs/${id}`} className="blog-item-link">
                          <div className="card-box1">
                            <div className="decora3">
                              <img
                                src={companyLogoUrl}
                                alt="company logo"
                                className="cardImage"
                              />
                              <div className="decora4">
                                <h1>{title}</h1>
                                <BsFillStarFill style={{color: '#fbbf24'}} />
                                <p>{rating}</p>
                              </div>
                            </div>
                            <div className="decora5">
                              <div className="decora6">
                                <ImLocation style={{marginTop: '18px'}} />
                                <p>{location}</p>
                                <MdWork
                                  style={{
                                    marginTop: '18px',
                                    marginLeft: '15px',
                                  }}
                                />
                                <p>{employmentType}</p>
                              </div>

                              <p>{packagePerAnnum}</p>
                            </div>

                            <hr />
                            <h1>Description</h1>
                            <p>{jobDescription}</p>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </>
        ) : (
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
                </ul>

                <li>
                  <button
                    type="button"
                    className="logout-desktop-btn"
                    onClick={this.onClickLogout}
                  >
                    Logout
                  </button>
                </li>

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
            <div className="product-sections">
              <Profile activeId={this.activeId} salId={this.salId} />
              <div className="products-loader-container">
                <Search searchClick={this.searchClick} />
                <div className="no-jobs">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                    alt="no jobs"
                  />
                  <h1>No Jobs Found</h1>
                  <p>We could not find any jobs. Try other filters</p>
                </div>
              </div>
            </div>
          </>
=======
          <div className="product-sections">
            <Profile activeId={this.activeId} salId={this.salId} />
            <div className="products-loader-container">
              <Search searchClick={this.searchClick} />
              <ul className="products-list">
                {jobsList.map(job => (
                  <JobCard jobData={job} key={job.id} />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="product-sections">
            {/*             <Profile activeId={this.activeId} salId={this.salId} />
             */}{' '}
            <div className="products-loader-container">
              <Search searchClick={this.searchClick} />
              <div className="no-jobs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                  alt="no jobs"
                />
                <h1>No Jobs Found</h1>
                <p>we could not find any jobs,try other filters.</p>
              </div>
            </div>
          </div>
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
        )}
      </div>
    )
  }

  renderLoader = () => (
<<<<<<< HEAD
    <div className="products-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="product-sections">
      <Profile activeId={this.activeId} salId={this.salId} />

      <div className="products-loader-container">
        <Search />
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
          className="failure-image"
        />
        <h1 className="hello">Oops! Something Went Wrong</h1>
        <p className="hello">
          We cannot seem to find the page you are looking for
        </p>
        <button
          type="button"
          className="hello button"
          onClick={this.handleButtonClick}
        >
          Retry
        </button>
=======
    <div className="product-sections">
      {/*       <Profile activeId={this.activeId} salId={this.salId} />
       */}{' '}
      <div className="products-loader-container">
        <Search />
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
      </div>
    </div>
  )

<<<<<<< HEAD
=======
  renderFailureView = () => (
    <div className="products-loader-container">
      <Search />
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="hello">Oops!Something Went Wrong</h1>
      <p className="hello">
        We cannot seem to find the page you are looking for
      </p>
      <button
        type="button"
        className="hello button"
        onClick={this.handleButtonClick}
      >
        Retry
      </button>
    </div>
  )

>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }
}

export default Jobs
