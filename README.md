## How to Publish MQTT Messages Locally

*After cloning the repository locally, make sure you run 'npm install' to bring in all of the necessary packages.*

<br />

Have three different terminals/command prompts available:

Step 0: Download & install Mosquitto (MQTT broker)
- https://mosquitto.org/download/

Step 1: In one terminal, start the mosquitto session and open it on a port
- For Windows, use this guide: https://subscription.packtpub.com/book/application_development/9781787287815/1/ch01lvl1sec13/installing-a-mosquitto-broker-on-windows
- For macOS, run the following command: /usr/local/sbin/mosquitto -c /usr/local/etc/mosquitto/mosquitto.conf

Step 2: In a second terminal, start the web app from within the root directory with the following command
- Windows and macOS: npm start

Step 3: In a third terminal, publish a message to the mqtt topic with the following command
- Windows and macOS: mosquitto_pub -t '*your topic name here*' -h 'test.mosquitto.org' -m '*your message here*'

Step 4: Refresh your browser and you should see the message you just published with the mosquitto_pub command

🥳   👍


<br />

Good blog post you can follow here: preciouschicken.com/blog/posts/a-taste-of-mqtt-in-react/


<br />


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
