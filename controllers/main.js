console.log("----CONTROLLERS/MAIN----")

/* GET homepage */
const index = (req, res) => {
    console.log("the index in the controller has been reached")
    res.render("index", { title: "Travlr Getaways" }) // The res. render() function is used to render a view and sends the rendered HTML string to the client. Syntax: res.render(view [, locals] [, callback])
  }
  
  module.exports = {
    index,
  }
  
  //https://www.geeksforgeeks.org/express-js-res-render-function/