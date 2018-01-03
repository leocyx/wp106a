var mongojs = require("mongojs")
var db = mongojs("127.0.0.1:27017/mtrack", ["eat_table"])
var dbt = mongojs("127.0.0.1:27017/mtrack", ["traffic_table"])
var dbl = mongojs("127.0.0.1:27017/mtrack", ["leisure_table"])
var M = module.exports = {}


M.eat_record = function(content){
    alert("db")
    db.eat_table.insert({"content":content.content})
    alert("ggggg")
}

M.traffic_record = function(){
    //dbt.traffic_record.insert({"content":contrnt.content}
}

M.leisure_record = function(){
   // dbt.leisure_record.insert({"content":contrnt.content}
}

M.find = function(option){
    var result
    if(option == "飲食"){
        alert("1")
        result = db.eat_table.find(function(err, docs){
            if(docs){result = JSON.stringify(docs)
                    result = JSON.parse(result)
                alert("result="+result[0].content)
                return result[0].content
            }
        })
        //result = JSON.parse(result)
        alert(result)
        return result
    }
}