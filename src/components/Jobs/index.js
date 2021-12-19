import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'
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

  activeId = ids => {
    const {activeList} = this.state
    this.setState({activeList: ids}, this.getJobs)
  }

  salId = id => {
    const {salList} = this.state
    this.setState({salList: id}, this.getJobs)
  }

  renderJobsList = () => {
    const {jobsList} = this.state

    return (
      <div>
        {jobsList.length > 0 ? (
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
        )}
      </div>
    )
  }

  renderLoader = () => (
    <div className="product-sections">
      {/*       <Profile activeId={this.activeId} salId={this.salId} />
       */}{' '}
      <div className="products-loader-container">
        <Search />
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

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
