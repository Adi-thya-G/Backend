const mongoose=require('mongoose');


const connections=mongoose.connect('mongodb://0.0.0.0/men')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });


module.exports=connections