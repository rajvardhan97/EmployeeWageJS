// UC 1: Check whether employee is present or not
const Is_Present = 1
let EmpCheck = Math.floor(Math.random() * 10) % 2;
if(EmpCheck == Is_Present)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent");
}

// UC 2:  Calculate daily employee wage
const PartTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WageperHour = 20;
let Emphours = 0;
let CheckEmp = Math.floor(Math.random() * 10) % 3;
CalculateDailyWage(CheckEmp);
// UC3: Refactor UC 2 with Function
function CalculateDailyWage(CheckEmp)
{
    switch(CheckEmp)
{
    case PartTime:
        Emphours = PartTimeHours;
        break;
    case FullTime:
        Emphours = FullTimeHours;
        break;
    default:
        Emphours = 0;
        break;
}
let EmpWage = Emphours * WageperHour;
//console.log("Employee Wage is: " + EmpWage);
return EmpWage;
}

// UC 4: Calculate wages for a month 
const Working_Days=20;
let totalEmpWage=0;
for(let i=1; i<=Working_Days; i++)
{
    var empCheck=Math.floor(Math.random()*10) % 3;
    empWage=CalculateDailyWage(empCheck);
    totalEmpWage+=empWage;
}
console.log("Monthly Employee Wage = " + totalEmpWage);

// UC 5: calculate wages for total working hours 160 or max days of 20 in month
const Max_Hrs_In_Month =160;
let totalEmpHrs=0;
let totalWorkingDays=0;
let totalWage=0;
while(totalEmpHrs<=Max_Hrs_In_Month && totalWorkingDays<Working_Days)
{
    totalWorkingDays++;
    totalEmpHrs += Emphours;
    let empCheck=Math.floor(Math.random()*10) % 3;
    let tempwage=CalculateDailyWage(empCheck);
    totalWage+=tempwage;
}
console.log("Total Employee Wage : "+totalWage + " in " + totalWorkingDays + " days and " + totalEmpHrs + " hours");

// UC 6: Store Daily wage in Array
let EmpDailyWageArray = new Array();
for(let i=1; i<= Working_Days; i++)
{
    var empCheck=Math.floor(Math.random()*10) % 3;
    empWage=CalculateDailyWage(empCheck);
    EmpDailyWageArray.push(empWage);
}
EmpDailyWageArray.forEach(element => {
    console.log("Wage is: " + element);
});

// UC 7a: Iterate Array using Helper function Foreach or reduce
let totEmpWage = 0;
function sum(EmpWage) {
  totEmpWage += EmpWage;
}
EmpDailyWageArray.forEach(sum);
console.log("Total Wage: "+totEmpWage);

//UC 7b: Show the Day along with Daily Wage using Array map helper function
let day = 0;
function mapDayWithWage(EmpWage){
    day++;
    return ("Day "+day+" = "+ EmpWage);
}
let mapDayWithWageArray = EmpDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage List:");
console.log(mapDayWithWageArray);

// UC 7c: Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullTime = mapDayWithWageArray.filter(fullTimeWage);
console.log("Full time along with day:" + fullTime);

// UC 7d: Find the first occurrence when Full Time Wage was earned using find function
function FullTimeWageFirstOccurence(EmpWage)
{
    return EmpWage.includes("160");
}
console.log("Full Time Wage First Occurence : "+mapDayWithWageArray.find(FullTimeWageFirstOccurence));

// UC 7e: Check if Every Element of Full Time Wage is truly holding Full time wage
function FullTimeWage(EmpWage){
    return EmpWage.includes("160");
}
console.log("Check whether full time array has only fulltime wage: "+fullTime.every(FullTimeWage));

// UC 7f: Check if there is any Part Time Wage
function PartTimeWage(EmpWage)
{
    return EmpWage.includes("80");
} 
console.log("Check whether array has any parttime wage: "+mapDayWithWageArray.some(PartTimeWage));

// UC 7g: Find the number of days worked
let daycount=0;
function totalDaysWorked(EmpWage){
    if(EmpWage > 0)
    {
        return daycount++;
    }
}
console.log("Number of days employee worked : "+EmpDailyWageArray.reduce(totalDaysWorked));

// UC 8: Store the Day and the Daily Wage
var empDailyHrmap = new Map();
let empDailyWageMap = new Map();
var employees=new Array();
{
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let totalWage=0;
    employees.push(0);
    employees.push(4);
    employees.push(8);
    while(totalEmpHrs<=Max_Hrs_In_Month && totalWorkingDays< Working_Days)
    {
        totalWorkingDays++;
        var empCheck=Math.floor(Math.random()*10) % 3;
        let tempwage=CalculateDailyWage(empCheck);
        totalWage+=tempwage;
        totalEmpHrs+=employees[empCheck];
        empDailyWageMap.set(totalWorkingDays,tempwage);
        empDailyHrmap.set(totalWorkingDays,employees[empCheck]);
    }
    console.log("Total Days : "+ totalWorkingDays + " Total Hours : "+totalEmpHrs + " Total Emp Wage : "+totalWage);
    console.log(empDailyWageMap);

  function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
  }
  console.log("Emp Wage Map total Wage: "+
  Array.from(empDailyWageMap.values()).reduce(totalWages,0));
}

//UC 9: Arrow Functions
var findTotal = (totalVal,DailyVal)=>
{
    return totalVal+DailyVal;
}
  let totalHrs = Array.from(empDailyHrmap.values()).reduce(findTotal,0);
  let totalSalary = Array.from(empDailyWageMap.values()).filter(dailyWage=>dailyWage>0).reduce(findTotal,0);

  //9a)Use arrow function to find emp total hrs and wage
  console.log("Employee Total hours: "+totalHrs+"\nEmployee Total Wage: "+totalSalary);

  //9b)Show fulltime, part time and absent days
  console.log("Show fulltime,part time and absent days");
  let absent = new Array();
  let partTimeWorking = new Array();
  let fullTimeWorking = new Array();

  empDailyHrmap.forEach((value,key,map) =>{
    if( value == 8)
    fullTimeWorking.push(key);
    else if(value == 4)
    partTimeWorking.push(key);
    else
    absent.push(key);
  })
  console.log("Absent days: "+absent);
  console.log("Fulltime work days: "+fullTimeWorking);
  console.log("Parttime work days: "+partTimeWorking);

//UC10: Storing Days Hrs and Wages in object
let employeeDayandHr =new Array();
{
  let totalEmpHrs=0;
  let totalWorkingDays=0;
  let totalWage=0;

  while(totalEmpHrs<=Max_Hrs_In_Month && totalWorkingDays< Working_Days)
  {
      totalWorkingDays++;
      var empCheck=Math.floor(Math.random()*10) % 3;
      let tempwage=CalculateDailyWage(empCheck);
      totalWage+=tempwage;
      totalEmpHrs+=employees[empCheck];
      employeeDayandHr.push({
          day:totalWorkingDays,
          dailyHour:employees[empCheck],
          dailyWage:tempwage,
          toString(){
              return '\nDay:'+this.day+"\tHours"+this.dailyHour+"\tWages: "+this.dailyWage
          },
      });
  }
  console.log("Data stored in the Array of object:"+employeeDayandHr);


// UC11: Perform following Object operations using Arrow Functions

    // 11a: Calculate total Wage and total hours worked

    totalWage = employeeDayandHr.filter(dailyHourWage => dailyHourWage.dailyWage > 0).reduce( (totalWages, dailyHourWage) => totalWages += dailyHourWage.dailyWage, 0);
    totalWorkingHours = employeeDayandHr.filter(dailyHourWage => dailyHourWage.dailyHour > 0).reduce((totalHrs, dailyHourWage) => totalHrs += dailyHourWage.dailyHour, 0);
    console.log("Total Wage: " + totalWage);
    console.log("Total working hours:" + totalWorkingHours);

    // 11b: Show the full workings days using foreach

    console.log("Show the full workings days using foreach");
    employeeDayandHr.filter(dailyHourWage => dailyHourWage.dailyHour == 8).forEach(dailyHour => console.log(dailyHour.toString()));

    // 11c: Show Part working days using Map by reducing to String Array
    let partTimeEmployee= employeeDayandHr.filter(pEmployeeArr=>pEmployeeArr.dailyHour==4).map(pEmployeeArr=>pEmployeeArr.toString());
    console.log("Part time employee using string array:"+partTimeEmployee);

    // 11d: No working days only using Map function
    let noWorkingday= employeeDayandHr.filter(pEmployeeArr=>pEmployeeArr.dailyHour==0).map(pEmployeeArr=>pEmployeeArr.day);
    console.log("No working days:",noWorkingday.join(","));
}