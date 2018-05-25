# Superheroes react project

## In this project

- single page application created from scratch
- routed application (react-router-dom & expressJs)
- secured server side api calls
- scripts to automatically relaunch the server and rebuild client in dev mode
- use of materialUi & responsive design
- eslint

## Config file

Rename the file /conf.copy.json to /conf.json and change the parameters.
```json
{
    "API_PUBLIC": "xxxx",
    "API_PRIVATE": "xxxx",
    "BASE_URL": "http://gateway.marvel.com:80"
}
```
replace "xxxx" values

## Install

```bash
npm install
```

## Build & run

run the project in development mode (build sources and launch server)

```bash
npm run dev
```

build sources

```bash
npm run build
```

run the server

```bash
npm run start
```

## Try the application

Once the application is running, open the 
[following link](http://localhost:3000)