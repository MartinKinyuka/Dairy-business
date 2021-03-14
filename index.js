var farm = ["A", "B","C","D"]
var shed = prompt("Please enter shed name");
if (shed === "A"){
  var report = prompt("Do you want weekly or monthly report?");
      if(report === "weekly"){
        console.log("The weekly production in Shed A is "+ 400*7 +"litres")
      }
      else{
        var month = prompt("Please enter the month");
        for(var month = "january";"march";"may"){
          console.log("The milk production in  Shed A is "+400*7+1200+"litres")
        }
        for(var month="july";"august";){
          console.log("The milk production in  Shed A is "+400*7+1200+"litres")
        }
        for(var month="december";"october";){
          console.log("The milk production in  Shed A is "+400*7+1200+"litres")
        }
        for(var month="february";"null";){
          console.log("The milk production in Shed A is "+ 400*7 +"litres")
        }
        for(var month="april";"june";){
          console.log("The milk production in Shed A is "+ 400*7+800 +"litres")
        }
        for(var month="september";"november";){
          console.log("The milk production in Shed A is "+ 400*7+800 +"litres")
        }


           
      }

      
        
      



}
