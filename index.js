
const cors=require("cors")
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const stripe=require("stripe")('sk_test_51JVDNuAqoKgnL4BKpk6QMjfYKJ1tGwnAVno9kEyhXQZ3t1kzpbOVb4wyuovzqythVJGy4T2CoHnSCeWkBLtelRwE00s3AvLp3Y')




app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json())


app.post('/payments/create', async (req,res)=>{
const total=req.query.total;
console.log(req.query.total)
const paymentIntent=await stripe.paymentIntents.create({
  amount: total,
  currency:"usd",
});



res.send({
  clientSecret:paymentIntent.client_secret,
})
})


app.listen(process.env.PORT || 4000,(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log("connected")
  }
})


