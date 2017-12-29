var mongodb = require("mongodb")
var M = module.export = {}

M.open = function(dbname){
    return mongodb.Mongoclient.connect('mongodb://localhost:27017'+'/'+dbName, function(err, client){

    })
}

M.init = function(){
    M.db = M.open("mtrack")
    M.eattalbe = M.db.collection("eat_record")
    M.traffic = M.db.collection("traffic_record")
    M.leisure = M.db.collection("leisure_record")
}

M.eat_record = function(){
    M.record.insert()
}

M.traffic_record = function(){

}

M.leisure_record = function(){

}