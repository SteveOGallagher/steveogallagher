var React = require('react'),
    PropTypes = React.PropTypes;


function ControlButton (props) {
  return (
    <div className="controller__container">
      <div className="controller__basewrapper">
        <img className={"controller__baseimg " + (props.positionClass) } src="images/cross-controller-shadow.png" alt=""/>

        <div className={"controller__joystick " + (props.positionClass) }
          onTouchStart={props.controllerPosition}
          onTouchEnd={props.endMove}>
          <img className="controller__holdermg" src="images/cross-controller-no-shadow.png" alt=""/>
        </div>

        <svg width="20" height="32" viewBox="0 0 20 32" className={"chevron chevron__up " + (props.upActive)}>
          <path d="M10 8l-10 10 4 4 6-6 6 6 4-4-10-10z"></path>
        </svg>

        <svg width="20" height="32" viewBox="0 0 20 32" className={"chevron chevron__down " + (props.downActive)}>
          <path d="M10 8l-10 10 4 4 6-6 6 6 4-4-10-10z"></path>
        </svg>

        <svg width="20" height="32" viewBox="0 0 20 32" className={"chevron chevron__left " + (props.leftActive)}>
          <path d="M10 8l-10 10 4 4 6-6 6 6 4-4-10-10z"></path>
        </svg>

        <svg width="20" height="32" viewBox="0 0 20 32" className={"chevron chevron__right " + (props.rightActive)}>
          <path d="M10 8l-10 10 4 4 6-6 6 6 4-4-10-10z"></path>
        </svg>
      </div>
    </div>
  )
}

ControlButton.protoTypes = {
  controllerPosition: PropTypes.func.isRequired,
  endMove: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  positionClass: PropTypes.string.isRequired,
  upActive: PropTypes.string.isRequired,
  downActive: PropTypes.string.isRequired,
  leftActive: PropTypes.string.isRequired,
  rightActive: PropTypes.string.isRequired
}

module.exports = ControlButton;