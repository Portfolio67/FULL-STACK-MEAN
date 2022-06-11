/* GET about view */
console.log("----CONTROLLERS/ABOUT----")
const about = (req, res) => {
    console.log("the about page in the controller has been reached")
    res.render("about", { title: "Travlr Getaways" })
  }
  module.exports = {
    about,
  }
  