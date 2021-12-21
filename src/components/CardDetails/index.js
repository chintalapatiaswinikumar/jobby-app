import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import {BsFillStarFill, BsBoxArrowUpRight} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdWork} from 'react-icons/md'
import NotFound from '../NotFound'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CardDetails extends Component {
  state = {
    detailedData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getItemData()
  }

  handleButtonClick = () => {
    this.getItemData()
  }

  getItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
<<<<<<< HEAD
=======
    const {detailedData} = this.state
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const data = {}
      const updatedData = {}
<<<<<<< HEAD
      console.log('fetched data', fetchedData)
=======
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
      updatedData.companyLogoUrl = fetchedData.job_details.company_logo_url
      updatedData.companyWebsiteUrl =
        fetchedData.job_details.company_website_url
      updatedData.employmentType = fetchedData.job_details.employment_type
      updatedData.id = fetchedData.job_details.id
      updatedData.jobDescription = fetchedData.job_details.job_description
      updatedData.lifeAtCompany = fetchedData.job_details.life_at_company
      updatedData.location = fetchedData.job_details.location
      updatedData.packagePerAnnum = fetchedData.job_details.package_per_annum
      updatedData.rating = fetchedData.job_details.rating
      updatedData.skills = fetchedData.job_details.skills
      updatedData.title = fetchedData.job_details.title
      const JobDetails = updatedData
      const similarData = fetchedData.similar_jobs

      data.JobDetails = JobDetails
      data.similarJobs = similarData
      this.setState({detailedData: data, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

<<<<<<< HEAD
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    console.log(history)
    history.replace('/login')
  }

=======
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
  renderItemDetails = () => {
    const {detailedData} = this.state
    console.log(detailedData)
    const {JobDetails, similarJobs} = detailedData
    const {
      companyLogoUrl,
      title,
      rating,
      location,
      employmentType,
      packagePerAnnum,
      jobDescription,
      skills,
      lifeAtCompany,
      companyWebsiteUrl,
    } = JobDetails

    return (
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
        <div className="decoration">
          <div className="decor2">
            <div className="decor3">
              <img
                src={companyLogoUrl}
                className="details-logo"
                alt="job details company logo"
              />
              <div className="decor4">
                <h1>{title}</h1>
                <BsFillStarFill style={{color: '#fbbf24'}} />
                <p>{rating}</p>
              </div>
            </div>
            <div className="decor5">
              <div className="decor6">
                <ImLocation style={{marginTop: '18px'}} />
                <p>{location}</p>
                <MdWork style={{marginTop: '18px', marginLeft: '15px'}} />
                <p className="ara">{employmentType}</p>
              </div>
              <p>{packagePerAnnum}</p>
            </div>
            <hr />
            <div className="decor7">
              <h1>Description</h1>
              <a href={companyWebsiteUrl} className="anch">
                Visit
                <BsBoxArrowUpRight />
              </a>
            </div>
            <p>{jobDescription}</p>
            <h1>Skills</h1>
            <div className="decor10">
              {skills.map(item => (
                <ul>
                  <li key={item.id}>
                    <div className="decor9">
                      <img src={item.image_url} alt={item.name} />
                      <p className="ara">{item.name}</p>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <h1>Life at Company</h1>
            <div className="decor8">
              <p>{lifeAtCompany.description}</p>
              <img src={lifeAtCompany.image_url} alt="life at company" />
            </div>
          </div>
          <h1>Similar Jobs</h1>
          <div className="decor11">
            {similarJobs.map(item => (
              <ul>
                <li key={item.id}>
                  <div className="decor12">
                    <div className="decor3">
                      <img
                        src={item.company_logo_url}
                        className="details-logo"
                        alt="similar job company logo"
                      />
                      <div className="decor4">
                        <h1>{item.title}</h1>
                        <BsFillStarFill style={{color: '#fbbf24'}} />
                        <p>{item.rating}</p>
                      </div>
                    </div>
                    <h1>Description</h1>
                    <p>{item.job_description}</p>
                    <div className="decor5">
                      <div className="decor6">
                        <ImLocation style={{marginTop: '18px'}} />
                        <p>{item.location}</p>
                        <MdWork
                          style={{marginTop: '18px', marginLeft: '15px'}}
                        />
                        <p className="ara">{item.employment_type}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </>
=======
      <div className="decoration">
        <div className="decor2">
          <div className="decor3">
            <img
              src={companyLogoUrl}
              className="details-logo"
              alt="job details company logo"
            />
            <div className="decor4">
              <h1>{title}</h1>
              <BsFillStarFill style={{color: '#fbbf24'}} />
              <span>{rating}</span>
            </div>
          </div>
          <div className="decor5">
            <div className="decor6">
              <ImLocation style={{marginTop: '18px'}} />
              <p>{location}</p>
              <MdWork style={{marginTop: '18px', marginLeft: '15px'}} />
              <p className="ara">{employmentType}</p>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
          <hr />
          <div className="decor7">
            <h1>Description</h1>
            <a href={companyWebsiteUrl} className="anch">
              Visit
              <BsBoxArrowUpRight />
            </a>
          </div>
          <p>{jobDescription}</p>
          <h1>Skills</h1>
          <div className="decor10">
            {skills.map(item => (
              <div className="decor9">
                <img src={item.image_url} alt={item.name} />
                <p className="ara">{item.name}</p>
              </div>
            ))}
          </div>
          <h1>Life at Company</h1>
          <div className="decor8">
            <p>{lifeAtCompany.description}</p>
            <img src={lifeAtCompany.image_url} alt="life at company" />
          </div>
        </div>
        <h1>Skills</h1>
        <div className="decor11">
          {similarJobs.map(item => (
            <div className="decor12">
              <div className="decor3">
                <img
                  src={item.company_logo_url}
                  className="details-logo"
                  alt="job details company logo"
                />
                <div className="decor4">
                  <h1>{item.title}</h1>
                  <BsFillStarFill style={{color: '#fbbf24'}} />
                  <span>{item.rating}</span>
                </div>
              </div>
              <h1>Description</h1>
              <p>{item.job_description}</p>
              <div className="decor5">
                <div className="decor6">
                  <ImLocation style={{marginTop: '18px'}} />
                  <p>{item.location}</p>
                  <MdWork style={{marginTop: '18px', marginLeft: '15px'}} />
                  <p className="ara">{item.employment_type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
    )
  }

  renderLoadingView = () => (
<<<<<<< HEAD
    <div className="products-loader-container" testid="loader">
=======
    <div className="products-loader-container">
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
<<<<<<< HEAD
      <h1 className="hello">Oops! Something Went Wrong</h1>
      <p className="hello">
        We cannot seem to find the page you are looking for
      </p>
=======
      <h1 className="hello">Oops!Something went wrong</h1>
      <p className="hello">We cannot seem to find a page you are looking for</p>
>>>>>>> 02af72ed9c076ba616ea086f87c7acff5c9d3b82
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
        return this.renderItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return <NotFound />
    }
  }
}

export default CardDetails
