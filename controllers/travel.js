/* GET travel view */
console.log("----CONTROLLERS/TRAVEL----")

//for api defualt options
const request = require("request");
const apiOptions = {
  server: "http://localhost:3000",
};

// if (process.env.NODE_ENV === 'production') {                        2
//   apiOptions.server = 'https://pure-temple-67771.herokuapp.com';    2
// }  

//  TRAVEL LIST
// internal method to contain the logic for processing the response body returned from the API call and render the travel view.
const renderTravelList = (rec, res, responseBody) => {
  let message = null;
  let pageTitle = process.env.npm_package_description + " - Travel";

  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No trips exist in database";
    }
  }
  res.render("travel", {
    title: pageTitle,
    trips: responseBody,
    message,
  });
};

/* get travel list*/
const travelList = (req, res) => {
  const path = "/api/trips";
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: "GET",
    json: {},
  };
// call to api
  console.info(" >> travelcontroller.travelList calling" + requestOptions.url);
  request(requestOptions, (err, { statusCode }, body) => {
    if (err) {
      console.error(err);
    }
    renderTravelList(req, res, body); // call to handle render view
  });
};

module.exports = {
  travelList,
};

// TRAVEL DEALS
// internal method to contain the logic for processing the response body returned from the API call and render the travel view.
const rendertravelDetails = (rec, res, responseBody) => {
  let message = null;
  let pageTitle = process.env.npm_package_description + " Travel";

  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No trave lDetails exist in database";
    }
  }
  res.render("travel", {
    title: pageTitle,
    trips: responseBody,
    message,
  });
};

/* get travel list*/
const travelDetails = (req, res) => {
  const path = "/api/trips/";
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: "GET",
    json: {},
  };

  console.info(" >> travelcontroller.travelDetails calling" + requestOptions.url);
  request(requestOptions, (err, { statusCode }, body) => {
    if (err) {
      console.error(err);
    }
    rendertravelDetails(req, res, body); // call to handle reder view
  });
};

module.exports = {
  travelDetails, travelList
};
