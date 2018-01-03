var M = module.exports = {}
var mongojs = require("mongojs")
var db = mongojs("127.0.0.1:27017/mtrack", ["eat_table"])
var dbt = mongojs("127.0.0.1:27017/mtrack", ["traffic_table"])
var dbl = mongojs("127.0.0.1:27017/mtrack", ["leisure_table"])
var date = new Date()

        function openwin(){
          var total = document.getElementById("total")
          db.eat_table.findOne({"id":"tmoney"},function(err, docs){
            if(!docs){
              db.eat_table.insert({"id":"tmoney","totalm":"0"})
            }
            total.innerText = docs.totalm
          })
        }

        function work(option){ 
            var money = document.getElementById("amount")
            var total = document.getElementById("total")
            var description = document.getElementById("description")
            var detail = document.getElementById("detail")
            var sum = M.event_description(description.value, money.value)
            if(option === "eat"){
             M.eat(money.value, total.innerText)
             openwin()
             db.eat_table.find(function(err,docs){
                db.eat_table.insert({"content":sum,"detail_num":docs.length})
             })
            }
            else if(option === "traffic"){
              M.eat(money.value, total.innerText)
              openwin()
              db.traffic_table.find(function(err,docs){
                db.traffic_table.insert({"content":sum,"detail_num":eval(docs.length+"+1")})
              })
            }
            else if(option === "leisure"){
              M.eat(money.value, total.innerText)
              openwin()
              db.leisure_table.find(function(err,docs){
                 db.leisure_table.insert({"content":sum,"detail_num":eval(docs.length+"+1")})
              })
            }
            else if(option === "eatdetail"){
              detaildisplay(detail,'飲食')
            }
            else if(option === "trafficdetail"){
              detaildisplay(detail,'交通')
            }
            else if(option === "leisuredetail"){
             detaildisplay(detail,'休閒')
            }
        }

        function delete_detail(opt,detail_num){
          var totalm
          let m = new Array()
          db.eat_table.findOne({"id":"tmoney"}, function(err,docs){
            if(opt == "飲食"){
                db.eat_table.findOne({"detail_num":parseInt(detail_num)},function(err,docs){
                m = docs.content.split("|")
                totalm = eval(total.innerText+'-'+m[2])
                total.innerText = totalm
                db.eat_table.remove({"detail_num":parseInt(detail_num)})
                db.eat_table.update({"id":"tmoney"} , {$set:{"totalm":total.innerText}})
                detaildisplay(detail,opt)
               })
            }
            else if(opt == "交通"){
              db.traffic_table.findOne({"detail_num":parseInt(detail_num)},function(err,docs){
                m = docs.content.split("|")
                totalm = eval(total.innerText+'-'+m[2])
                total.innerText = totalm
                db.traffic_table.remove({"detail_num":parseInt(detail_num)})
                db.traffic_table.update({"id":"tmoney"} , {$set:{"totalm":total.innerText}})
                detaildisplay(detail,opt)
              })
            }
            else if(opt == "休閒"){
              db.leisure_table.findOne({"detail_num":parseInt(detail_num)},function(err,docs){
                m = docs.content.split("|")
                totalm = eval(total.innerText+'-'+m[2])
                total.innerText = totalm
                db.leisure_table.remove({"detail_num":parseInt(detail_num)})
                db.leisure_table.update({"id":"tmoney"} , {$set:{"totalm":total.innerText}})
                detaildisplay(detail,opt)
              })
            }
           
          })
          
        }

        function detaildisplay(detail, option){
          var detailop = document.getElementById("labeldetail")
          detailop.innerText = option
          detail.innerHTML = ""
          if(option == '飲食'){
           db.eat_table.find(function(err,docs){
              if(docs){
                //alert(docs.length)
                for(var i=1; i<docs.length;i++){ 
                  detail.innerHTML = docs[i].content+"元<button onclick=delete_detail('飲食','"+docs[i].detail_num+"') value='"+i+"'>刪除</button>"+"<br>"+detail.innerHTML
                }
              }
            })
          }
          else if(option == '交通'){ 
            dbt.traffic_table.find(function(err,docs){
              if(docs){
                for(var i=0; i<docs.length;i++) detail.innerHTML = docs[i].content+"元<button onclick=delete_detail('交通','"+docs[i].detail_num+"') value='"+i+"'>刪除</button>"+"<br>"+detail.innerHTML
              }
            })
          }
          else if(option == '休閒'){
            dbl.leisure_table.find(function(err,docs){
              if(docs){
                for(var i=0; i<docs.length;i++) detail.innerHTML = docs[i].content+"元<button onclick=delete_detail('休閒','"+docs[i].detail_num+"') value='"+i+"'>刪除</button>"+"<br>"+detail.innerHTML
              }
            })
          }
        }
        
        M.event_description = function(description, money){
          var sum = parseInt(date.getMonth())+parseInt("1")+'/'+date.getDate()+' | '+description+" | "+money
          return sum
        }
        
        M.eat = function(money,total){
          var totalm = eval(money+"+"+total)
          db.eat_table.update({"id":"tmoney"} , {$set:{"totalm":totalm}})
        }
       