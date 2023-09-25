const mongoose = require("mongoose");

main().then((res)=>{
    console.log("connection successful")
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  const bookSchema= mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    author: {
        type : String,
    },
   price: {
        type : Number,
        min:[1,"Price two low for selling"]
    },
    category:{
        type: String,
        enum:["selfdevelopment"],
    }
  })

  const Book = mongoose.model("book",bookSchema);

//   let book1= new Book({
//     title:"Ikigai",
//     author:"Robert",
//     price: 250,
//     category:"selfdevelopment"
//   })
//   book1.save();

//updatewith validations

Book.findByIdAndUpdate("650faf0e90c3232827f31a55",
{price:-10},
{runValidators:true}).
then((res)=>{console.log(res);}).
catch((err)=>{console.log(err.errors.price.properties.message);})
