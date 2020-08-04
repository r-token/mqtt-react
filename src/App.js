import React, { useState, Fragment } from 'react';
import './App.css';

var mqtt = require('mqtt');
var options = {
    // mqtts = mqtt, but secured with SSL/TLS (like https)
  protocol: 'mqtts', 
    // clientId uniquely identifies client
    // choose any string you wish
  clientId: 'b0908853'
};

// a test mqtt broker you can use
var client = mqtt.connect('mqtt://test.mosquitto.org:8081', options);

// testtopic1234 is the MQTT topic - you can call this whatever you want
client.subscribe('testtopic1234');

function App() {
  var note;
  client.on('message', function (topic, message) {
    note = message.toString();
      // Updates React state with message 
    setMesg(note);
    console.log(note);
    client.end();
  });

  // Sets default React state 
  const [mesg, setMesg] = useState(<Fragment><em>No messages detected...</em></Fragment>);

  return (
    <div className="App">
      <header className="App-header">
        <h1>A taste of MQTT in React</h1>
        <p>Message: {mesg}</p>
      </header>
    </div>
  );
}

export default App;