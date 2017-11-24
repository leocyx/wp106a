var eatmoney = new Array()
        var trafficmoney = new Array()
        var leisuremoney = new Array()
        function work(option){
            var money = document.getElementById("amount")
            var total = document.getElementById("total")
            if(option === "eat")eat(money, total)
            else if(option === "traffic")traffic(money, total)
            else if(option === "leisure")leisure(money, total)
        }
      function eat(money, total){
          eatmoney.push(money)
        total.innerText = eval(total.innerText+"+"+money.value)
      }
      function traffic(money, total){
          trafficmoney.push(money)
          total.innerText = eval(total.innerText+"+"+money.value)
        }
      function leisure(money, total){
          leisuremoney.push(money)
          total.innerText = eval(total.innerText+"+"+money.value)
        }