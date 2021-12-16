import {Component} from 'react'
import './index.css'

class SalaryItem extends Component {
  /*  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails */
  /*  const onClickTabItem = () => {
    clickTabItem(tabId)
  } */

  handleRadioChange = e => {
    const {selectedSal} = this.props
    selectedSal(e.target.value)
  }

  render() {
    const {item} = this.props
    return (
      <li className="profileList">
        <input
          key={item.salaryRangeId}
          type="radio"
          id={item.salaryRangeId}
          className="profileInput"
          name={item.label}
          value={item.salaryRangeId}
          onChange={this.handleRadioChange}
        />
        <label htmlFor={item.salaryRangeId} className="profileLabel">
          {item.label}
        </label>
      </li>
    )
  }
}

export default SalaryItem
