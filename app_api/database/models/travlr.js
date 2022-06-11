console.log('-------------- APP_api/DATABASE/models / TRAVLR.JS---------')
const mongoose = require('mongoose');
//main().catch(err => console.log(err));
//new
// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/MEAN_LOCAL_M4', {useMongoClient: true,});
// }

   // define the trip schema with a schema and a collection of objects
   // object model
const tripSchema = new mongoose.Schema({
    code: {type: String, required: true, index: true }, 
    name: {type: String, required: true, index: true}, 
    length: {type: String, required: true},
    start: {type: Date, required: true}, 
    resort: {type: String, required: true},
    perPerson: {type: String, required: true}, 
    image: {type: String, required: true}, 
    description: {type: String, required: true}
   
//});
// use the mongoose varible and call the model method and give it the name of the collection , then the definition

});

//mongoose.model('trips', tripSchema);


module.exports = mongoose.model('trips', tripSchema);
//console.log(module.exports)
//new

console.log('---END--------APP_api/DATABASE/models / TRAVLR.J---------');
console.log();
//const MyModel = mongoose.model('app_server/trips', tripSchema);
//console.log(MyModel);
//const doc = new MyModel();
// testModel = doc instanceof MyModel; // true
// console.log(testModel);
// testModel2 = doc instanceof mongoose.Model; // true
// console.log(testModel2);
// testDoc = doc instanceof mongoose.Document; // true
// console.log(testDoc);



//console.log(tripSchema);
// obj = mongoose.model("trips", tripSchema);
// console.log(obj);
// str = JSON.stringify(obj);
// console.log(str);
//.model() function makes a copy of schema.
//https://mongoosejs.com/docs/models.html