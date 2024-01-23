// Write your code here

import './index.css'

//  id,imageUrl, name, location, registrationStatus

const EventItem = props => {
  const {each, onClickButton} = props
  const {imageUrl, name, location, registrationStatus} = each
  const handleBtn = () => {
    onClickButton(registrationStatus)
  }
  return (
    <li className="event-item-card">
      <button onClick={handleBtn} className="event-item-btn" type="button">
        <img className="event-item-btn-img" src={imageUrl} alt="event" />
        <p className="event-item-name">{name}</p>
        <p className="event-item-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
