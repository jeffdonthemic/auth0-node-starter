# auth0-node-starter

A barebones starter application for Auth0. Provides login functionality, security and viewing user info.

## Auth0 Settings

Setup for Auth0 is extremely fast and easy. Just [sign up for a free account at Auth0](https://auth0.com/) and then [open the Dashboard](https://manage.auth0.com). Click on the "Default App" from the Apps/APIs section and enter your callback URLs: `http://localhost:8000/callback` & `http://YOUR-APP.herokuapp.com/callback` (if you want to run the app from Heroku). You'll need some of the settings from this page when configuring up your app.

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
2. Export the following variables to your environment from Auth0.

```
export AUTH0_DOMAIN=YOUR-AUTH0-NAMESPACE
export AUTH0_CLIENT_ID=YOUR-AUTH0-CLIENT-ID
export AUTH0_CLIENT_SECRET=YOUR-AUTH0-CLIENT-SECRET
export AUTH0_CALLBACK_URL=http://localhost:8000/callback
export AUTH0_SCOPE='openid profile'
```

3. Start the server with `node app.js`
4. Point your browser to: [http://localhost:8000](http://localhost:8000)

## Contributors
* Jeff Douglas -> [jeffdonthemic](https://github.com/jeffdonthemic)
