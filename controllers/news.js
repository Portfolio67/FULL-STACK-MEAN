/* GET news view */
console.log("----CONTROLLERS/NEWS----")
const news = (req, res) => {
    console.log("the news page in the controller has been reached")
    res.render("news", { title: "Travlr Getaways" }) 
  }
  module.exports = {
    news,
  }
  