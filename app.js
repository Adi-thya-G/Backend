const express=require('express')
const morgan = require('morgan')
const userModel=require('./models/user')
const connections=require('./config/db')
const app=express();
app.use(morgan('dev'))
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static("public"))
app.use((req,res,next)=>{
console.log("middele ware")
next()
 
})
app.set('view engine','ejs')
 app.get("/"
// ,(req,res,next)=>{
//   console.log('specific middleware')
//   next()

// }
,(req,res)=>{
  res.render('index')
})
app.get('/register',(req,res)=>{
  res.render('register')
})
 app.post("/register",async(req,res)=>{
 const {name,email,password}=req.body;
 const userView= await userModel.create({username:name,
    email:email,
    password:password})

  res.send(userView)
 })

 app.get("/view",async(req,res)=>{

  // userModel.find({
  //   username:"Adithya"
  // }).then((res1)=>{
  //   res.send(res1)
  // })

  userModel.findOne({
    username:"Adithya1"//it return object
  }).then((userdata)=>{
    console.log(userdata)
    res.send(userdata)
  })
 })

 app.get('/update-data',async(req,res)=>{
  await userModel.findOneAndUpdate({
    username:"Adithya"

  },{
    email:"adithyakg312004@gmail.com"
  })
  res.send("user update")
 })

 app.get("/user-delete",async(req,res)=>{
  await userModel.findOneAndDelete({
    username:"Adithya"
  })
  res.send("user is deleted successfuly")
 })
app.post("/form_data",(req,res)=>{
  console.log(req.body)
  
  res.send("data recevied")
})

app.get("/about",(req,res)=>{
  res.send("about page")
  console.log("about")
})

app.listen(3000,()=>{
  console.log("http://localhost:3000")
})