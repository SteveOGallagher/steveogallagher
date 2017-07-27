var React           = require('react'),
    ReactDOM        = require('react-dom'),
    ControlButton   = require('../objects/ControlButton');

var PlayerControls = React.createClass({
  getInitialState: function() {
    return {
      startingX: '',
      startingY: '',
      positionClass: '',
      upActive: '',
      downActive: '',
      leftActive: '',
      rightActive: ''
    }
  },

  controllerPositionHandler: function(e) {  

    var centerY   = e.touches[0].target.height / 2 + e.touches[0].target.y,
        centerX   = e.touches[0].target.width / 2 + e.touches[0].target.x,
        eventY    = e.touches[0].clientY,
        eventX    = e.touches[0].clientX,
        direction = '',
        hue       = 0,
        switching = 'true';  

    if (centerY && centerX) {

      if (eventX - 30 > centerX && eventY < centerY + 30 && eventY > centerY - 30) {
        hue = "blue";
        direction = 'right';

        this.setState({
          positionClass: 'right',
          rightActive: 'active'
        });
      }
      else if (eventX + 30 < centerX && eventY < centerY + 30 && eventY > centerY - 30) {
        hue = "red";
        direction = 'left';

        this.setState({
          positionClass: 'left',
          leftActive: 'active'
        });

      }
      else if (eventY + 30 < centerY && eventX > centerX - 30 && eventX < centerX + 30) {
        hue = "green";
        direction = 'top';

        this.setState({
          positionClass: 'up',
          upActive: 'active'
        });

      }
      else if (eventY - 30 > centerY && eventX > centerX - 30 && eventX < centerX + 30) {
        switching = "false";
        direction = 'bottom';

        this.setState({
          positionClass: 'down',
          downActive: 'active'
        });

      }
      this.props.socket.emit ("playerControl", { "Switch" : switching, "Color" : hue, 'direction': direction } );
    }    
  },

  endMoveHandler: function() {
    this.setState({
      positionClass: '',
      upActive: '',
      downActive: '',
      leftActive: '',
      rightActive: ''
    })
  },

  render: function () {
    return (
      <ControlButton 
        ref="child"
        positionClass={this.state.positionClass}
        upActive={this.state.upActive}
        downActive={this.state.downActive}
        leftActive={this.state.leftActive}
        rightActive={this.state.rightActive}
        controllerPosition={this.controllerPositionHandler}
        endMove={this.endMoveHandler} > 
        
      </ControlButton>
    )
  }
});

module.exports = PlayerControls;