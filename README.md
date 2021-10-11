# Simple Chat Application

This is a Real Time App with React + Socket IO based on [this project](https://github.com/mahenrique94/video-aplicacoes-real-time-socketio) from [Matheus Castiglioni](https://www.youtube.com/channel/UCSrG4Y5uz0dcSfi_2qMQdGQ) channel.

## Frontend

React JS using socket on port *8080* and internal IP.

## Backend

NodeJs + Socket IO up on port *8080* and with CORS enabled for React JS port *3000* using internal IP.


### Install and Configuration

+ Install [NodeJS](https://nodejs.org/en/) on the server;
    + Check if the program has been installed:
        `nodejs -v`
+ Clone the project;
    `git clone www`
+ Open the folder and install all dependencies;
    ```sh
    cd simple-chat
    npm i
    ```
+ Change the current IP *(192.168.0.1)* and port *(8080)* to the local IP and port used by the backend server;
    + This configuration is in *simple-chat/src/components/Chat/index.jsx - line 6*
+ Start the frontend project;
    `npm start`
+ Open a new terminal, enter the server folder and install all dependencies;
    ```sh
    cd simple-chat/server
    npm i
    ```
+ Change the current IP *(192.168.0.1)* and port *(8080)* to the local IP and preferred port for the backend server;
    + This configuration is in *simple-chat/server/server.js - lines 1 and 2*
+ Changes the current IP *(192.168.0.1)* and port *(3000)* to the local IP and port used by the frontend;
    + This configuration is on *simple-chat/server/server.js - lines 3 and 4*
+ Start the backend project;
    `npm start`

This project needs to be accessed using the configured internal IP, not via *localhost*.
