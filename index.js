var express=require("express")
/*var mongodb =require("mongodb")
var MongoClient=mongodb.MongoClient;*/

var server=express();

server.use(express.static('public'))
/*var url = "mongodb://localhost:27017";
var db;
MongoClient.connect(url, function (err, client) {

    db = client.db("firstCart");
    console.log(err);
})*/ 

items=[{
    id:123,
    name:"health",
    quantity:3,
    price:231,
    total:693
}]

server.get("/add",function(req,res){
    var a=req.query.product
    var b=req.query.amount
    var c=req.query.price

    var d=new Date();

var obj={id:d.getTime(),name:a,quantity:b,price:c,total:b*c}
items.push(obj)
res.json(items)
})

server.get("/items",function(req,res){
    res.json(items)
})

server.get("/delete",function(req,res){
    var d=req.query.id;

    for(i=0;i<items.length;i++){
    if(d==items[i].id){
        items.splice(i,1)
    }
    }

    res.json(items)
})

server.listen(8000,function(){
    console.log("server started")
})