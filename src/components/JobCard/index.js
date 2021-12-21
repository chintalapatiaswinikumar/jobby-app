import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdWork} from 'react-icons/md'
import './index.css'

class JobCard extends Component {
  render() {
    const {jobData} = this.props
    const {
      companyLogoUrl,
      title,
      rating,
      location,
      employmentType,
      jobDescription,
      packagePerAnnum,
      id,
    } = jobData
    return (
      <li className="card-container">
        <Link to={`/jobs/${id}`} className="blog-item-link">
          <div className="card-box1">
            <div className="decora3">
              <img
                src={companyLogoUrl}
                alt="company logo"
                className="cardImage"
              />
              <div className="decora4">
                <p>{title}</p>
                <BsFillStarFill style={{color: '#fbbf24'}} />
                <span>{rating}</span>
              </div>
            </div>
            <div className="decora5">
              <div className="decora6">
                <ImLocation style={{marginTop: '18px'}} />
                <p>{location}</p>
                <MdWork style={{marginTop: '18px', marginLeft: '15px'}} />
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
  }
}

export default JobCard
