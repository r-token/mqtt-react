## How to Publish MQTT Messages Locally

*After cloning the repository locally, make sure you run 'npm install' at the root folder to bring in all of the necessary packages.*

<br />

Step 0 (optional): Download & install Mosquitto (MQTT broker)
- https://mosquitto.org/download/

Step 1: In a terminal window, start the web app from within the root directory with the following command
- npm start

Step 2.0: Click one of the two buttons on the screen

Step 2.1 (optional, and you'll need to have done Step 0): In a second terminal, publish a message to the mqtt topic with the following command
- mosquitto_pub -t '*your topic name here*' -h 'test.mosquitto.org' -m '*your message here*'

Step 3: Refresh your browser and you should see the message you just published

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
