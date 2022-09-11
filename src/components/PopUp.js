import React from 'react'
import './Popup.css'

function PopUp(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className="popup-inner">
            <button onClick={()=>props.setTrigger(false)}>close</button>
            {props.children}
        </div>
    </div>  
  ) : "";
}

export default PopUp