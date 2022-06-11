/* GET contact view */
console.log("----CONTROLLERS/CONTACT----")
const contact = (req, res) => {
    console.log("the contact page in the controller has been reached")
    res.render("contact", { title: "Travlr Getaways" }) 
  }
  module.exports = {
    contact,
  }
  