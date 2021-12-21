import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'
import ListItem from '../List'
import SalaryItem from '../SalaryList'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Profile extends Component {
  state = {
    profileDetails: {},
    activeList: [],
    salList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProfileDetails()
  }

  selectedItem = (id, check) => {
    console.log(this.props, id, check)
    const {activeList} = this.state
    const {activeId} = this.props
    if (check === true) {
      activeList.push(id)
      activeId(activeList)
    }
    if (check === false) {
      const active = activeList.filter(item => item !== id)
      this.setState({activeList: active})
      activeId(active)
    }
  }

  selectedSal = id => {
    const {salList} = this.state
    salList.push(id)
    const {salId} = this.props
    salId(salList)
  }

  handleButtonClick = () => {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/profile'
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
      const updatedData = {}
      updatedData.name = fetchedData.profile_details.name
      updatedData.profileImageUrl =
        fetchedData.profile_details.profile_image_url
      updatedData.shortBio = fetchedData.profile_details.short_bio
      this.setState({
        profileDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderProfile = () => {
    const {profileDetails} = this.state
    return (
      <div className="product-sections">
        <div className="profile-container">
          <div>
            <div className="profileBox">
              {console.log('in profile')}
              <img
                src={profileDetails.profileImageUrl}
                alt="profile"
                className="img1"
              />
              <div className="profileBox1">
                <h1 className="profileHeading">{profileDetails.name}</h1>
                <p className="profilePara">{profileDetails.shortBio}</p>
              </div>
            </div>
          </div>
          <hr className="horizontal" />
          <div>
            <h1 className="profileHeading1">Type of Employment</h1>
            <ul>
              {employmentTypesList.map(item => (
                <ListItem
                  key={item.employmentTypeId}
                  item={item}
                  selectedItem={this.selectedItem}
                />
              ))}
            </ul>
          </div>
          <hr className="horizontal" />
          <div>
            <h1 className="profileHeading1">Salary Range</h1>
            <ul>
              {salaryRangesList.map(item => (
                <SalaryItem
                  key={item.salaryRangeId}
                  item={item}
                  selectedSal={this.selectedSal}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <>
      <div className="profile-container">
        <div>
          <div className="profileBox">
            {/* <img
            src={profileDetails.profileImageUrl}
            alt="profile"
            className="img1"
          /> */}
            <div className="profileBox1">
              {/* <h1 className="profileHeading">{profileDetails.name}</h1>
            <p className="profilePara">{profileDetails.shortBio}</p> */}
              <button
                type="button"
                className="button"
                onClick={this.handleButtonClick}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
        <hr className="horizontal" />
        <div>
          <h1 className="profileHeading1">Type of Employment</h1>
          <ul>
            {employmentTypesList.map(item => (
              <ListItem
                key={item.employmentTypeId}
                item={item}
                selectedItem={this.selectedItem}
              />
            ))}
          </ul>
        </div>
        <hr className="horizontal" />
        <div>
          <h1 className="profileHeading1">Salary Range</h1>
          <ul>
            {salaryRangesList.map(item => (
              <SalaryItem
                key={item.salaryRangeId}
                item={item}
                selectedSal={this.selectedSal}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProfile()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }
}

export default Profile
