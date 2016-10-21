This project was bootstrapped with create-react-app. All the technical details are available [here](https://github.com/facebookincubator/create-react-app).

This project uses SASS and Compass for styles, each component has a .js file in `src/Components` the corresponding .scss file is in `src/styles/Components`. 

## For Development

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `compass watch`

Compiles SASS into `public/css/main.css`.


## To add your start-up/company

Edit the `public/data.json` file in accordance with the following format.
```javascript
  {
    "name": "Name of the company",
    "location": {
      "city": "City",
      "country": "Country"
    },
    "openings": [
      {
        "role": "Name of the role",
        "applyLink": "Link to apply for the role (could be a :mailto link)" 
      }
    ]
  }
