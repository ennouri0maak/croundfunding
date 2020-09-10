import react from 'react'

var NewComponent = React.createClass({
    render: function() {
      return (
          
  
        <div className="main">
          <h1>Range Slider with value</h1>
          <div className="slideContainer">
            <input type="range" min={0} max={100} defaultValue={42} className="slider" id="myRange" />
            <p>Value: <span id="value" /></p>
          </div>
          
        </div>
        
      );
    }
  });