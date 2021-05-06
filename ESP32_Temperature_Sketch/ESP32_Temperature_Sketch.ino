//Import Libraries
#include <WiFi.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <Firebase_ESP_Client.h>
#include "time.h"

// Provide the token generation process info.
#include "addons/TokenHelper.h"
// Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"
 
// Firebase
#define DATABASE_URL "https://ph212-iot-default-rtdb.firebaseio.com/"
#define API_KEY "AIzaSyAPv8bo2aRQk4whWDRUJTXrcoE_Hy17Xv4"
#define USER_EMAIL "loggeraccount@logger.com"
#define USER_PASSWORD "datalogger"

// WiFi
#define WIFI_SSID "juniper2.4"
#define WIFI_PASSWORD "jackrabbit"

// Serial and Board
#define BAUDRATE  115200
#define ONE_WIRE_BUS 4

// time

// sketch variables for interval to record temp
unsigned long previousMillis = 0;
const long interval = 30000;

// Firebase data object
FirebaseData fbdo;

// Firebase auth object
FirebaseAuth auth;

// Firebase config object
FirebaseConfig config;

// Onewire communication protocol instance
OneWire oneWire(ONE_WIRE_BUS); 

// oneWire reference to DallasTemperature
DallasTemperature sensors(&oneWire);

void setup() {
  // time
  
  // sensors
  Serial.begin(BAUDRATE);
  sensors.begin();

  // wifi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi..");
  }
  Serial.println("Connected to the WiFi network");

  // firebase
  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  config.database_url = DATABASE_URL;
  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}
 
void loop() {
  // check time to update db
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // save the last time data sent to Fireabase
    previousMillis = currentMillis;
    // Read sensors
    sensors.requestTemperatures();
    float temperatureC = sensors.getTempCByIndex(0);
    Serial.println(temperatureC);
    // Send readings to firebase
    Firebase.RTDB.pushTimestamp(&fbdo, "timestamp/");
    Firebase.RTDB.pushFloat(&fbdo, "temperatures/", temperatureC);
    
  }
}
