---
outline: [2,4]
---
# Getting Started

## Installation
Chiwi makes use of a server-client architecture. The client can be found at the
[chiwi github repository](https://github.com/redflameken/chiwi) and the server
at the [ChiwiServer github
repository](https://github.com/redflameken/chiwiserver)

### Client
The client is deployed using github pages and can be accessed at
[redflameken.github.io/chiwi](https://redflameken.github.io/chiwi). But you may
run it locally with the following prerequisites:
* Flutter SDK

You must first get the project at the [chiwi github
repository](https://github.com/redflameken/chiwi).

Either download it from github or clone with git:
```bash
git clone https://github.com/redflameken/chiwi
```

### Server
The server is the heart of the application. This handles all logic and data of
the application. The **machine that will host the server should have the
following**:

* [whisper.cpp](https://github.com/ggml-org/whisper.cpp)
* A MySQL server
* Java Development Kit (JDK)
* The Chiwi springboot server:
  [ChiwiServer](https://github.com/redflameken/chiwiserver)

The whisper.cpp server and MySQL server must be running before running the
Chiwi Springboot server.

#### whisper.cpp
The **ChiwiServer** makes use **whisper.cpp** to transcribe user voice inputs
from the clients. Follow the instructions at
[whisper.cpp](https://github.com/ggml-org/whisper.cpp) for building the server.
Before running the server, ensure that you've downloaded the model for it to
use. 

#### MySQL
A MySQL server must be running when using the ChiwiServer Springboot
application as it is used by Hibernate to store data. Ensure that the MySQL
server has been configured to use the default port 3306. Once the MySQL server
has been setup, ensure that you have created a database with the name
**`chiwi_db`**. Hibernate will then automatically configure that database with
the necessary tables.

#### ChiwiServer
The **ChiwiServer** is powered by Springboot. But before you may run it, you
must also prepare some configuration files and certificates. This is setup like
this so that private keys and configurations aren't tracked by git.

The ChiwiServer makes use of https for security reasons. In order to allow
Springboot to use https, a self signed certificate may be used. It can be
generated using the following command:
```
keytool -genkeypair -alias chiwiserver -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore keystore.p12 -validity 3650
```

> [!IMPORTANT] REMEMBER
> You should remember the alias and password used when generating this keystore

The ChiwiServer also needs a configuration json file with the following format: 
```json
{
    "database": {
        "username": "<mysql_username>",
        "password": "<mysql_password>"
    },
    "encryption": {
        "password": "AnyPassword"
    },
    "ssl": {
        "keystore-password": "<keystore_password>",
        "keystore-type": "PKCS12",
        "keystore-alias": "<keystore_alias>"
    }
}
```

""

## Running

### Client
inside the project, you may run the application with the following:

if using **chrome**:
```
flutter run -d chrome
```
This should automatically open the chiwi application in the browser. If not,
flutter should give you a *localhost* url with a port number of where the
project was run. For example, it gave the url `http://localhost:4216`. You
should then open that url in the browser.

Optionally, you may define which port to use by adding the
`--web-port` flag. For example, you want to use the port **5454**:
```
flutter run -d chrome --web-port 5454
```

if using **non-chromium browsers**
```
flutter run -d web-server
```
This will not open the application in the browser and just start a web-server
to serve the application.

### Server

#### whisper.cpp
Assuming you are inside the whisper.cpp project directory/folder, you may
run to following command:
```
build/bin/whisper-server -m <location_of_the_model> --port 5050
```

on **Windows**:
```
build\bin\whisper-server.exe -m <location_of_the_model> --port 5050
```

> [!IMPORTANT]
> It it important to use the 5050 port for whisper.cpp as it is currently
> hard-coded into the springboot server to use the port 5050 when requesting to
> the whisper-server.

#### MySQL
Just ensure that the server is running


#### ChiwiServer
