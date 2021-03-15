var farm = ["A", "B","C","D"]
var thirtyOneDays= function(){
  return 11200+1200;
}
var thirtyDays= function(){
  return 11200+800;
}
var tOnDays=function(){
  return 14000+1500;
}
var tDays=function(){
  return 14000+1000;
}
var shed = prompt("Please enter shed name");
if (shed === "A"){
  var report = prompt("Do you want weekly or monthly report?");
      if(report === "weekly"){
        console.log("The weekly production in Shed A is "+ 2800 +"litres")
      }
      else{
        var month = prompt("Please enter the month");
        for(var month = "january";"march";"may"){
          console.log("The milk production in  Shed A is "+ thirtyOneDays() +"litres")
        }
        for(var month="july";"august";){
          console.log("The milk production in  Shed A is "+ thirtyOneDays() +"litres")
        }
        for(var month="december";"october";){
          console.log("The milk production in  Shed A is "+ thirtyOneDays() +"litres")
        }
        for(var month="february";"null";){
          console.log("The milk production in Shed A is "+ 400*7 +"litres")
        }
        for(var month="april";"june";){
          console.log("The milk production in Shed A is "+ thirtyDays() +"litres")
        }
        for(var month="september";"november";){
          console.log("The milk production in Shed A is "+ thirtyDays() +"litres")
        }


           
      }

   
}



else if (shed=== "B"){
  var report = prompt("Do you want weekly or monthly report?");
  if(report === "weekly"){
    console.log("The weekly production in Shed B is "+ 500*7 +"litres")
  }
  else{
    var month = prompt("Please enter the month");
    for(var month = "january";"march";"may"){
      console.log("The milk production in  Shed B is "+ tOnDays() +"litres")
    }
    for(var month="july";"august";){
      console.log("The milk production in  Shed B is "+ tOnDays() +"litres")
    }
    for(var month="december";"october";){
      console.log("The milk production in  Shed B is "+ tOnDays() +"litres")
    }
    for(var month="february";"null";){
      console.log("The milk production in Shed B is "+ 500*7 +"litres")
    }
    for(var month="april";"june";){
      console.log("The milk production in Shed A is "+ tDays +"litres")
    }
    for(var month="september";"november";){
      console.log("The milk production in Shed A is "+ tDays +"litres")
    }


       
  }
}
else {
  
}


  

