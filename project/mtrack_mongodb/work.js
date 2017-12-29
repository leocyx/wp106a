var M = module.exports = {}
var eatmoney = new Array()
var trafficmoney = new Array()
var leisuremoney = new Array()
var date = new Date()
var totalm = ''
        function work(option){ 
            var money = document.getElementById("amount")
            var total = document.getElementById("total")
            var description = document.getElementById("description")
            var detail = document.getElementById("detail")
            totalm = total.innerText
            if(option === "eat"){
              total.innerText = M.eat(money.value)
              var sum = M.event_description(description.value, money.value)
              eatmoney.push(sum)
            }
            else if(option === "traffic"){
              total.innerText = M.traffic(money.value)
              var sum = M.event_description(description.value, money.value)
              trafficmoney.push(sum)
            }
            else if(option === "leisure"){
              total.innerText = M.leisure(money.value)
              var sum = M.event_description(description.value, money.value)
              leisuremoney.push(sum)
            }
            else if(option === "eatdetail"){
              detaildisplay(detail, eatmoney, '飲食')
            }
            else if(option === "trafficdetail"){
              detaildisplay(detail, trafficmoney, '交通')
            }
            else if(option === "leisuredetail"){
             detaildisplay(detail, leisuremoney, '休閒')
            }
        }
        function detaildisplay(detail, memory, option){
          var detailop = document.getElementById("labeldetail")
          detailop.innerText = option
          detail.innerHTML = ""
          if(memory.length!="0")for(var i=0;i<memory.length;i++){
            detail.innerHTML = memory[i]+"<br>"+detail.innerHTML
          }
          else detail.innerHTML += "暫無資料"
        }
        M.event_description = function(description, money){
          var sum = parseInt(date.getMonth())+parseInt("1")+'/'+date.getDate()+' | '+description+" | "+money+'元' 
          return sum
        }
        
        M.eat = function(money){
          totalm = eval(totalm+"+"+money)
          return totalm
        }
        M.traffic = function (money){
          totalm = eval(totalm+"+"+money)
          return totalm
        }
        M.leisure = function (money){
          totalm = eval(totalm+"+"+money)
          return totalm
        }