# auth0-node-starter

A barebones starter application for Auth0.

## Auth0 Settings

Scope -- https://auth0.com/docs/protocols

## Deploy to Heroku

Deploy this app to Heroku for free and have it up and running in a matter of minutes.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/jeffdonthemic/node-nforce-demo)

## Local Installation Instructions

From the command line type in:

```
git clone git@github.com:jeffdonthemic/auth0-node-starter.git
cd auth0-node-starter
npm install
```

### Running the Application Locally

1. Open terminal and change directory to auth0-node-starter root
2. `node app.js`
3. Point your browser to: [http://localhost:8000](http://localhost:8000)

### Deploying to Heroku

```
heroku create
heroku config:add AUTH0_DOMAIN=YOUR-AUTH0-NAMESPACE
heroku config:add AUTH0_CLIENT_ID=YOUR-AUTH0-CLIENT-ID
heroku config:add AUTH0_CLIENT_SECRET=YOUR-AUTH0-CLIENT-SECRET
heroku config:add AUTH0_CALLBACK_URL=http://YOUR-DOMAIN/callback
heroku open
```

## Contributors
* Jeff Douglas -> [jeffdonthemic](https://github.com/jeffdonthemic)
