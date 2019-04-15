import React from 'react';
import ReactDOM from 'react-dom'; // this is usually ONLY found in the root component file

const Modal = props => {
   return ReactDOM.createPortal (
      <div className="ui dimmer modals visible active">
         <div className="ui standard modal visible active">
            This is a modal component brought to you by React Portals.
         </div>
      </div>,
      document.querySelector('#modal')
   );
};

export default Modal;