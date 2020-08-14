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

var client = mqtt.connect('mqtt://test.mosquitto.org:8081', options); // a test mqtt broker/server you can use
const topic = 'testtopic1234' // testtopic1234 is the MQTT topic - you can call this whatever you want

client.subscribe(`${topic}/#`); // subscribe to all message that have the main topic in the path

function publishAMessage() {
  const message = 'A message'

  client.publish(`${topic}/testPath`, message)
}

function publishDifferentMessage() {
  const message = 'A different message'

  client.publish(`${topic}/differentPath`, message)
}

function App() {
  var note;
  client.on('message', function (topic, message) {
    note = message.toString();
      // Updates React state with message 
    setMesg(note);
    console.log(note);
    // client.end();
  });

  // Sets default React state 
  const [mesg, setMesg] = useState(<Fragment><em>No messages detected...</em></Fragment>);

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <h1>A taste of MQTT in React</h1>
          <p>Message: {mesg}</p>
          <br />
          <span>
            <button onClick={publishAMessage} style={{fontSize: '18px'}}>Publish a Message</button>
            <button onClick={publishDifferentMessage} style={{fontSize: '18px', marginLeft: '15px'}}>Publish a Different Message</button>
          </span>
        </header>
      </div>
    </Fragment>
  );
}

export default App;