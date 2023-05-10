import React from 'react';

function Chatbot () {
  return( 
    <div className="d-flex justify-content-end" style={{ position: "fixed", bottom: 0, right: 1 }}>
      <df-messenger
          chat-icon=""
          chat-title="Senna"
          agent-id="dbc245c4-ce7e-412f-92dd-dc48156f0e22"
          language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Chatbot