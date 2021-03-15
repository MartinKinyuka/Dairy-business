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
else if (shed==="C"){
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
      console.log("The milk production in Shed A is "+ tDays +"litres");
      {break}
    }


       
  }
}
else{
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
var thirtyPlus={
  months:["january","march","may","july","august","october","december"]
}
var thirty={
  months:["april","june","september","november"]
}
var thirtyless={
  months:"february"
}
var sellingPrice= 45
var totalDailyProd= function(){
  return 500+500+400+400
}
var weeklyProduction= function(){
  return 3500+3500+2800+2800
}
var weeklyIncome= function(){
  return weeklyProduction*sellingPrice
}
var income = prompt ("Do you want weekly or monthly income?");
if (income=== "weekly"){
  console.log("Your weekly income from all the sheds is "+ weeklyIncome()+"shillings")
}
else{
  var monthly_income= prompt("Please enter the month")
  while (montly_income=== thirtyPlus.months[0]){
    console.log("The monthly income for January is "+ totalDailyProd()*31 +"shillings");
    {break}
  }
  while (monthly_income=== thirtyPlus.months[1]){
    console
  }
}
  

