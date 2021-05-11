# PH212 Data Logging with ESP32

View data here:
## [DS18B20 Data Viewer](https://ph212-iot.web.app/)

## Requirements

- Data collection (temperature)
- Transportation (way to send the data)
- Storage (where to keep, find, and access the data)
- View (display requested data)
- Analyze (jupyter notebook)

## Tools to meet Requirements

### Cloud database: [Google Firebase](https://firebase.google.com/?gclid=CjwKCAjwm7mEBhBsEiwA_of-TD5PHSNm-pTd8_B1jxDlZTlkHMdI7itEJCZy71mlcUymIKrvgMNnZxoC-EoQAvD_BwE&gclsrc=aw.ds)

- A user friendly service google provides with a well documented API for developing cloud applications.
- Package with already built functions for connection with the firebase API.

### Network Communication- HTTP methods:

> With more time available I would try to implement MQTT, however, the firebase API which uses HTTP methods is simple and will work just fine for the scope of this project.

### Ideal protocol for scalability- MQTT (Message Queued Telemetry Transport)

- Interesting communication protocol created in 1999 by two guys who worked for Eurotech to monitor oil pipeline. I came across this while trying to I find a network protocol that wasn't as taxing as HTTP requests and not picky about a response.

- It works by allowing a device, in this case our data logger, to "subscribe" to a "broker" (server) from which we can access the data, "messages" sent from the device.

- It seems the purpose of MQTT is it's low usage of bandwidth, adaptability to stable network connections, and scalability to manage 1 to many IoT devices.

### Browser friendly client app: [React](https://reactjs.org/), open source javascript library

- Used to build a way to view the temp logger data. React is a frontend javascript library that creates modular interactive web pages/apps by taking advantage of how a browser renders html.

## Resources:

### Mozbit Library for use with firebase API

[Mozbit](https://github.com/mobizt/Firebase-ESP-Client)

### React Library for client app

[React](https://reactjs.org/)

### Recharts for data visualization with javascript

[Recharts](https://recharts.org/en-US/)


### PlatformIO vscode extension for embedded development

[platformio](https://platformio.org/)


### Firebase from google

[Google Firebase](https://firebase.google.com/?gclid=CjwKCAjwm7mEBhBsEiwA_of-TD5PHSNm-pTd8_B1jxDlZTlkHMdI7itEJCZy71mlcUymIKrvgMNnZxoC-EoQAvD_BwE&gclsrc=aw.ds)

## Plan/ Concept

1. Implement the transportation system (MQTT). For now going to use the "real-time database" (RTDB)from google that functions similar to the mqtt concept.

2. Set up the storage system using a cloud database, in this case: Firebase.

3. Create a client app to view data/info from the database using React. Host the app somewhere on someone elses hardware. Looks like google already provides hosting via Firebase.

- **Basically connect the device to the home network and send the data to someone elses hardware.**

## DS18B20 Temperature Sensor

- Uses ony one wire to communicate with the microcontroller. So the protocol is called 1-wire communication, pretty straightforward. 
- Digital 1 wire communication bus developed by Dallas Semiconductor.

## Server: firebase real-time database

For sending data to a google server we need to consider the structure of the data as well as who has permission to read an write that data.

## ESP32 Code Plan

Responsible for sending data to the database

```C++
// Declare sketch constants and variables

// Instantiate package objects

// Setup function
void setup()
{
  // Connect to WIFI

  // Connect hardware to server (use firebase API)
}

void loop()
{
  # Create time checker when to execute code (millis)
  
  # Read sensors
  
  # Send readings to server every 2 min... 30 readings / hour
}
```

### Non-relational database scheme:
We want time and a temp value...
```json
{
  "temperature": {
    "id hash": temp value celcius,
    "id hash": temp value celcius
  },
  "timestamp": {
    "id hash": temp value celcius,
    "id hash": temp value celcius
  }
}
```

### Security rules:
Only allow the unique id of our device write data...
```json
{
  "rules": {
    ".read": true,
    ".write": "auth.uid === <authorized user>"
  }
}
```

## Data Viewer
Create an application that can run in a browser and displays the data from the database.

```bash
yarn create-react-app
```

```Javascript
// define functions to render html for a graph
// define functions to render html for a table

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Testing

1. Pick something to measure, straw in the garden during the morning. Lets see how much it will change in an hour from bout 8am to 9am.

2. Check the database, viewer web app, and device:
- [x] device on and connected to network
- [x] data properly updating in db (records every 2min)
- [x] client app properly renders data from db

### Image of sensor out in the garden (within range to the house's router of course )

![garden](https://github.com/ztbochanski/PH212-Data-Logging/raw/main/images/straw-garden.jpg)