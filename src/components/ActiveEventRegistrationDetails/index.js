// Write your code here
import './index.css'

const RegistrationStatus = {
  initial: 'INTIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const renderIntialState = () => (
    <div className="intial-state">
      <p className="intial-state-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="yet-to-register">
      <img
        className="yet-to-register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-text">
        A Live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yet-to-register-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="registered">
      <img
        className="registered-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="registrations-closed">
      <img
        className="registrations-closed-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-text">
        Stay tuned. We will reopen <br /> the registration soon!
      </p>
    </div>
  )

  switch (eventStatus) {
    case RegistrationStatus.initial:
      return renderIntialState()
    case RegistrationStatus.yetToRegister:
      return renderYetToRegister()

    case RegistrationStatus.registered:
      return renderRegistered()

    case RegistrationStatus.registrationsClosed:
      return renderRegistrationsClosed()

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
