


#include <ESP8266WiFi.h>
const char *ssid = "Frontier8336-PRO-2.4G";
const char *password = "8402731433";
const char* host = "192.168.254.69";
const int port = 8081;
const int watchdog = 5000;
unsigned long previousMillis = millis();

#include "DHT.h" 


#define DHTTYPE DHT11
#define dht_dpin D2

DHT dht(dht_dpin, DHTTYPE);


void setup() 
{ 
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi Connected!");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  dht.begin();
  delay(2000);
  Serial.begin(9600);
  Serial.println("Temperature and Humidity\n\n");
  delay(500);

}

void loop() {
    float t = dht.readTemperature();
    float h = dht.readHumidity();
    //float t = 23.5;
   // float h = 65;
   if (isnan(t) || isnan(h)) {
        Serial.println("Failed to read from DHT sensor!");
    } else {
        Serial.print("Temperature: ");
        Serial.print(t);
        Serial.print(" Humidity: ");
        Serial.println(h);
    }

    unsigned long currentMillis = millis();
    
  if ( currentMillis - previousMillis > watchdog ) {
    previousMillis = currentMillis;
    WiFiClient client;
  
    if (!client.connect(host, port)) {
      Serial.println("Fail to conect");
      return;
    }

    String url = "/dh11/dh11_data.php?temp=";
    url += t;
    url += "&hum=";
    url += h;
    
    // Enviamos petición al servidor
    client.print(String("GET ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
    unsigned long timeout = millis();
    while (client.available() == 0) {
      if (millis() - timeout > 5000) {
        Serial.println(">>> Client Timeout !");
        client.stop();
        return;
      }
    }
  
    // Leemos la respuesta del servidor
    while(client.available()){
      String line = client.readStringUntil('\r');
      Serial.print(line);
    }
  }



  delay(2000);
  
}
