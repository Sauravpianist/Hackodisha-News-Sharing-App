const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://sauravpunworld2:sauravpianist123@crudapp.jkulw0h.mongodb.net/node_crud"
const connectToMongo = ()=>{
     mongoose.connect(
    mongoURI,
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
  );
}
module.exports = connectToMongo;