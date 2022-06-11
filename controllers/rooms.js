/* GET room view */
console.log("----CONTROLLERS/ROOMS----")

const rooms = (req, res) => {
    console.log("the room page in the controller has been reached")
    res.render("rooms", { title: "Travlr Getaways" }) 
  }
  module.exports = {
    rooms,
  }
  
