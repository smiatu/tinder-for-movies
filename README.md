# Tinder for movies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### (IMPORTANT NOTE)
To use app, it's important to firstly install all dependencies (e.g. by `npm install`),\
install json-server (app is using mocked server locally,\
you can find it's content and edit it in db.json file, for installation use `npm i json-server`).\
After installation, to use app initialize server by `json-server --watch db.json`.\
Possibly after few swipes, you'd need to clean it manually.\
Json server runs on [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in the interactive watch mode.\
There are only so few test as I believe I shouldn't replicate too much of trivial ones\
such as App.test.tsx (it was very useful when was configuring Jest though!)\
and I've successfully failed with more complex ones (few hours of work ended with deleting subsequently every try ;))\
Lack of experience I guess.