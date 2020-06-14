                      //CHAPTER:1

//task#1                     
var a=prompt("Enter your name: ");
alert("Hello " +a+" !");

//task#3
var a="Welcome to JS land...";
var b="Happy Coding!";
alert(a+"\n"+b);

//task#5
var task3="Hello...I can run JS through my web browser's console";
console.log(alert(task3));

//task#7


                      //CHAPTER:2
//task#1
var username;

//task#3
//(a)
var message;
//(b)
message= "Hello World";
//(c)
alert(message);

//task#5
var pizza="PIZZA \nPIZZ \nPIZ  \nPI \nP";
alert(pizza);

//task#7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

//task#9
var task9="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(task9);
document.write("<h1>Task#9</h1>");
document.write(task9 +"<br>");

                      //CHAPTER:3

//task#1
var age=19;
alert("I am "+age+" years old");

//task#3
document.write("<h1>Task#3</h1>");
var birthYear=2000;
document.write("My birth year is "+birthYear+"<br>"+
"Data type of my declared variable is number")


                    //CHAPTER:4

//task#1
var a,b,c;

//task#3
document.write("<h1>Task#3</h1>");
//(a)
document.write("<h1>Rules for naming JS variables </h1>");
//(b)
document.write("Variable names can only contain alphabets, numbers, $ and _ . For example : $my_1stVariable <br>");
//(c)
document.write("Variable must begin with a letter, $ or _ . For example:  $name, _name or name <br>");
//(d)
document.write("Variable names are case sensitive. <br>");
//(e)
document.write("Variable names should not be JS keywords.")


                    //CHAPTER:5

//task#1
document.write("<h1>Task#1</h1>");
var num1=+prompt("Enter first number: ");
var num2=+prompt("Enter second number: ");
var sum=num1+num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum);

//task#3
document.write("<h1>Task#3</h1>");
var number;
document.write("Value after variable declaration is : "+number);
number=5;
document.write("<br>Initial value : "+number);
number=++number;
document.write("<br>Value after increment is : "+number);
number=number+7;
document.write("<br>Value after addition is : "+number);
number=--number;
document.write("<br>Value after decrement is : "+number);
var remainder=number%3;
document.write("<br>The remainder is : "+remainder);

//task#5
document.write("<h1>Task#5</h1>");
var table=+prompt("Enter table of : ");
document.write("Table of "+table+":<br><br>");
for(var i=1;i<=10;i++){
    document.write(table+"*"+i+"  = "+table*i+"<br>");
}

//task#7
document.write("<h1>Task#7</h1>");
document.write("<h2>Shopping Cart </h2> <br>");
var price1 = 650;
var price2 = 100;
var quantity1 = +prompt("Enter quantity of item1 : ");
var quantity2 = +prompt("Enter quantity of item2 : ");
var shippingCharges = 100;
document.write("Price of item 1 is " + price1 + "<br>Quantity of item 1 is " + quantity1 + "<br>Price of item 2 is " + price2 + "<br>Quantity of item 2 is " + quantity2 + "<br>Shipping Charges " + shippingCharges + "<br><br>");
var totalCost=(price1*quantity1)+(price2*quantity2)+shippingCharges;
document.write("Total cost of your order is "+totalCost);

//task#9
document.write("<h1>Task#9</h1>");
document.write("<h2>Currency in PKR </h2>");
var dollars=10;
var riyals=25;
var currencyInPKR=(dollars*104.80)+(riyals*28);
document.write("Total currency In PKR : "+currencyInPKR);

//task#11
document.write("<h1>Task#11</h1>");
document.write("<h2>Age Calculator </h2>");
var currentYear=+prompt("Enter current year : ");
var birthYear=+prompt("Enter your birth year : ");
var age=currentYear-birthYear;
document.write("Current Year : "+currentYear);
document.write("<br>Birth Year : "+birthYear);
document.write("<br>You are either "+age+" or "+ (age-1)+" years old.");

//task#13
document.write("<h1>Task#13</h1>");
document.write("<h2>The Lifetime Supply Calculator: </h2>");
var fvtsnack = prompt("Enter your favourite  Snack : ");
var currentAge = +prompt("Enter your current Age : ");
var maxAge = +prompt("Estimated Maximum Age : ");
var amount = +prompt("Estimated amount of snacks per day(as a number) : ");
var calculatedValue = (maxAge - currentAge) * amount;
document.write("Favourite Snack : " + fvtsnack + "<br>Current Age : " + currentAge + "<br>Estimated Maximum Age : " + maxAge + "<br>Amount of snacks per day : " +amount);
document.write("<br>You will need "+calculatedValue+" "+fvtsnack+" to last you until the ripe old age of "+maxAge);

                     //CHAPTER:6-9

//task#1
document.write("<h1>Task#1</h1>");
document.write("<h4>Result:</h4>");
var a=+prompt("Enter the value of a : ");
document.write("The value of a is : "+a+"<br><br>------------------------------------<br><br>");
document.write("The value of ++a is : "+ (++a));
document.write("<br>Now the value of a is : " +a);
document.write("<br><br>The value of a++ is : "+(a++));
document.write("<br>Now the value of a is : " +a);
document.write("<br><br>The value of --a is : "+(--a));
document.write("<br>Now the value of a is : " +a);
document.write("<br><br>The value of a-- is : "+(a--));
document.write("<br>Now the value of a is : " +a);

//task#3
document.write("<h1>Task#3</h1>");
var name=prompt("Enter your name : ");
alert("Hello "+name+"!");
document.write("<h3>Hello "+name+"!</h3>");

//task#5
document.write("<h1>Task#5</h1>");
var table = +prompt("Enter table of : ");
if (table !=0) {
    document.write("Table of " + table + ":<br><br>");
    for (var i = 1; i <= 10; i++) {
        document.write(table + "*" + i + "  = " + table * i + "<br>");
    }
}
else {
    document.write("Table of 5 " + ":<br><br>");
    for (var i = 1; i <= 10; i++) {
        document.write(5 + "*" + i + "  = " + 5 * i + "<br>");
    }
}

                     //CHAPTER: 9-11

//task#1
var cityName=prompt("Enter city name : ");
if(cityName==="Karachi" || cityName==="karachi"){
    alert("Welcome to city of lights");
}

//task#3
var signalColor=prompt("Enter Color of road traffic signal ( red/green/yellow ): ");
signalColor=signalColor.toLowerCase();
if(signalColor==="red"){
    alert("Must Stop");
}
else if(signalColor==="yellow"){
    alert("Ready to move");
}
else if(signalColor==="green"){
    alert("Move now");
}

//task#5
document.write("<h1>Task#5</h1>");
//(a)
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//(b)
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//(c)
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
//(d) 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//(e)
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
//(f)
if ("car" < "cat") {
    alert("car is smaller than cat");
}
document.write("(a) Alert displayed <br>(b) Alert not displayed <br>(c) Alert displayed <br>(d) Alert displayed <br>(e) Alert displayed <br>(f) Alert displayed <br>");

//task#7
var secretNum=6;
var guess=+prompt("Guess the secret number (in range of 1-10) : ");
if(guess===secretNum){
    alert("Bingo! Correct answer");
}
else if(guess+1===secretNum){
    alert("Close enough to the correct answer");
}

//task#9
document.write("<h1>Task#9</h1>");
var a=+prompt("Enter a number :");
if(a%2==0){
    document.write("Entered number is an Even Number.");
}
else{
    document.write("Entered number is an Odd Number.");
}

//task#11
var firstNum=prompt("Enter First number : ");
var secondNum=prompt("Enter Second number : ");
var operation=prompt("Which operation would you like to perform? ( + , - , * , / , % ) : ");
if(operation==="+"){
    alert(firstNum+operation+secondNum+" = "+ ((+firstNum)+(+secondNum)))
}
else if(operation==="-"){
    alert(firstNum+operation+secondNum+" = "+ (firstNum-secondNum))
}
else if(operation==="*"){
    alert(firstNum+operation+secondNum+" = "+ (firstNum*secondNum))
}
else if(operation==="/"){
    alert(firstNum+operation+secondNum+" = "+ (firstNum/secondNum))
}
else if(operation==="%"){
    alert(firstNum+operation+secondNum+" = "+ (firstNum/secondNum)*100 +"%")
}
else{
    alert("Invalid opeartion!")
}

                    //CHAPTER: 12-13

//task#1
document.write("<h1>Task#1</h1>");
var char=prompt("Enter a character ( number or string ): ");
var index=0;
document.write("Entered Character : "+char+"<br>");
document.write("-------------------------------<br>");
if(Number(char)){
    document.write("The given input is a Number.");
}
else if(char.charCodeAt(index)>=65 && char.charCodeAt(index)<=90){
    document.write("The given input is an Uppercase letter.");
}
else if(char.charCodeAt(index)>=97 && char.charCodeAt(index)<=122){
    document.write("The given input is a Lowercase letter.");
}

//task#3
document.write("<h1>Task#3</h1>");
var number=+prompt("Enter a number : ");
document.write("Input number : "+number+"<br>-----------------------<br>");
if(number==0){
    document.write("Number is Zero.");
}
else if(number>0){
    document.write("Number is Positive.");
}
else if(number<0){
    document.write("Number is Negative.");
}

//task#5
//(a)
var correctPw="abcdef";
//(b)
var pw=prompt("Enter your password : ");
//(c)
if(pw.length==0){
    alert("Please enter your Password");
}
else{
    if(pw===correctPw){
        alert("Correct! The password you entered matches the original password");
    }
    else{
        alert("Incorrect password");
    }
}

//task#7
document.write("<h1>Task#7</h1>");
var time=+prompt("Enter time in 24-hours clock format(e.g: 1900) : ");
document.write("Time input by user  : "+ time+"<br>");
if(time>=0000 && time<1200){
    document.write("Good morning!");
}
else if(time>=1200 && time<1700){
    document.write("Good afternoon!");
}
else if(time>=1700 && time<2100){
    document.write("Good evening!");
}
else if(time>=2100 && time<=2359){
    document.write("Good night!");
}
else{
    document.write("Invalid time input!");
}


                //CHAPTER: 14-16

//task#1
var students=[];

//task#3
var students=["Ali","Areesha","Roohana"];

//task#5
var boolArray=[true,false,false,true,true,true];

//task#7
document.write("<h1>Task#7</h1>");
var qualifications=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.","PhD"];
document.write("<h3>Qualifications: </h3>");
for(var i=0;i<qualifications.length;i++){
    document.write((i+1)+") "+qualifications[i]+"<br>");
}

//task#9
document.write("<h1>Task#9</h1>");
document.write("Output is shown in console")
var colors = ["red", "green", "blue", "black", "white"];
console.log("Initial Array: ")
for (var i = 0; i < colors.length; i++) {
    console.log((i + 1) + ") " + colors[i] + "\n");
}
var addColor1=prompt("Which color do you want to add to the beginning of array? : ");
colors.unshift(addColor1);
console.log("(a): ");
console.log(colors);
var addColor2=prompt("Which color do you want to add to the end of the array? : ");
colors.push(addColor2);
console.log("(b):");
console.log(colors);
colors.unshift("indigo","violet");
console.log("(c):");
console.log(colors);
colors.shift();
console.log("(d):");
console.log(colors);
colors.pop();
console.log("(e):");
console.log(colors);
var index=prompt("Enter the index at which you want to add color: ");
var addColor3=prompt("Enter color name you want to add at that index :");
colors.splice(index,0,addColor3);
console.log("(f):");
console.log(colors);
var delcolour=prompt("Enter index at which you want to delete color : ");
var no=prompt("How many colors do you want to delete?  : ");
colors.splice(delcolour,no);
console.log("(g):");
console.log(colors);

//task#11
document.write("<h1>Task#11</h1>");
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<h3>Cities list:</h3>");
document.write(cities);
document.write("<br><h3>Selected cities List: </h3>");
var copy=cities.slice(2,4);
document.write(copy);

//task#13
document.write("<h1>Task#13</h1>");
var devices=[];
devices[0]="keyboard";
devices[1]="mouse";
devices[2]="printer";
devices[3]="monitor";
document.write("<h3>Devices : </h3>");
document.write(devices +"<br>");
for(var i=0;i<devices.length;i++){
    document.write("<h3>Out:</h3>"+devices[i]);
}

//task#15
document.write("<h1>Task#15</h1>");
var phone=["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
document.write("<h3>Phone Manufacturers: </h3>");
for(var i=0;i<phone.length;i++){
    document.write(i+1 + ") "+phone[i]+"<br>");
}

                          //CHAPTER: 17-20

//task#1
var Arr=[];
var Arr=[[1,2],[3,4],[5,6]];

//task#2
document.write("<h1>Task#2</h1>");
var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i=0;i<arr.length;i++){
    for(var j=0;j<=3;j++){
        document.write(arr[i][j]+" ");
    }
    document.write("<br>");
}

//task#3
document.write("<h1>Task#3</h1>");
for(var i=1;i<=10;i++){
    document.write(i+"<br>");
}

//task#5
document.write("<h1>Task#5</h1>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0;i<fruits.length;i++){
    document.write(fruits[i]+"<br>");
}
for(var j=0;j<fruits.length;j++){
    document.write("<br>Element at index "+j+" is "+fruits[j]);
}

//task#7
document.write("<h1>Task#7</h1>");
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to ABC Bakery.What do you want to oroder sir/ma'am?");
for (var i = 0; i < A.length; i++) {
    if (A[i] === input) {
        document.write(A[i] + " is <b>available</b> at index " + i + " in our bakery");
        break;
    } 
} 
if(A.includes(input)==false){
    document.write("We are sorry." + input + " is <b>not available</b> in our bakery");
} 

//task#9
document.write("<h1>Task#9</h1>");
var A = [24, 53, 78, 91, 12];
var small=A[0];
document.write("<h3>Array Items: </h3>"+A+"<br>");
for(var i=1;i<A.length;i++){
    if(A[i]<small){
        small=A[i];
    }
}
document.write("<h3>The smallest number is : </h3>"+small);


