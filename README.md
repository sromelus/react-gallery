# REACT GALLERY
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React Gallery is an application that displays a collection of 25 images from flickr's APi. The application allows to look up images from 'Dogs', 'Cars' and 'Planes' from the navigation bar. It also allows to search for any desired topic through a search bar.

##Installation

 1. run git clone
 2. nmp install - will install all dependencies
 3. A flickr api key is required in order to run the application. Please use this link to get an [api key](https://www.flickr.com/services/api)
    from flickr if you don't have one.
   1. In the `src` folder create a `config.js` folder to store your api_key
   2. And within the `config.js` folder the api key should be formatted like this.
     `const API_KEY = '######################';`
     `export default API_KEY;`

 4. npm start - app listens on localhost:3000
