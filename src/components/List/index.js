import './index.css'

const ListItem = props => {
  const {item, selectedItem} = props
  const {employmentTypeId} = item
  const handleCheckChange = e => {
    selectedItem(employmentTypeId, e.target.checked)

    // clickTabItem(tabId)
  }

  /*   const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
   */
  return (
    <li className="profileList">
      <input
        key={item.employmentTypeId}
        type="checkbox"
        id={item.employmentTypeId}
        className="profileInput"
        onClick={handleCheckChange}
      />
      <label htmlFor={item.employmentTypeId} className="profileLabel">
        {item.label}
      </label>
    </li>
  )
}

export default ListItem
