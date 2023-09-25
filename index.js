

const mongoose = require("mongoose");


//this connect method is ansyc and returns promise 
main().then((res)=>{
    console.log("connection successful")
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  const userSchema=  new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    } )
    
    
    //represents obj model
     const User = mongoose.model("User", userSchema);

    //  User.findById("650f9e7ffca653ca336adeca").then((res)=>{
    //     console.log(res);
    //   }).catch((err)=>{
    //       console.log(err);
    //   })

    // User.insertMany([{name:"Sharaddha", email: "Shraddha@gmail.com",age:24 },
    // {name:"Thugesh", email: "thugesh@gmail.com",age:27},
    // {name:"TRS", email: "trs@gmail.com",age:30}])
    // .then((res)=>{
    //     console.log(res);
    // })


    // const user1 = new User( {
    //     name: "Carry",
    //     email: "carry@gmail.com",
    //     age: 25
    // } )
    // user1.save();

    //Update 

    // User.updateOne({name:"TRS"},{age:31}).
    // then((res)=>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })
    
    //find and then update

    //User.findOneAndUpdate({name:"TRS"},{age:30}).if we want to see updatted data
    // User.findOneAndUpdate({name:"TRS"},{age:30}).
    // then((res)=>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })

    //delete
    User.deleteOne({name:"Carry"}).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })