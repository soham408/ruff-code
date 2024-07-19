let Number = -1

let Num = `${Number > 0 || Number < 0 ? "positive" : "Negetive"}`

// console.log(Num);

let number = 0;
let result = number > 0 ? "Positive" : (number < 0 ? "Negative" : "Zero");
// console.log(result);


// ================ if else ===================

let Numb = -1

if (Numb > 0) {
//    console.log("positive");
}else if(Numb < 0) {
    // console.log("negitive");
}else {
    // console.log("zero");
}



let age = 10

if (age == 18 || age > 18) {
    // console.log("eligible for vote");
}else if (age < 18) {
    // console.log("not eligible for vote");
}



let A = 15;
let B = 5;
let C = 15;

if (A > B) {
    // console.log("A is greater");
} else if (B > C) {
    // console.log("B is greater");
}else{
    // console.log("all are equal");
}


// ===================switch case=======================

let Weekday = 5 

switch (Weekday) {
    case 1:
        Weekday = "monday";
        break;

    case 2:
        Weekday = "tuesday";
        break;

    case 3:
        Weekday = "wednesday";
        break;

    case 4:
        Weekday = "thursday";
        break;

    case 5:
        Weekday = "friday";
        break;

    case 6:
        Weekday = "saturday";
        break;

    case 7:
        Weekday = "sunday";
        break;
}

// console.log("the day is: " + Weekday);



let Marks = 30;
let Grade; 

switch (true) {
    case (Marks <= 35):
    Grade = "F";
    break;

    case (Marks > 45):
    Grade = "D";
    break;

    case (Marks > 55):
    Grade = "C";
    break;

    case (Marks > 65):
    Grade = "B";
    break;

    case (Marks > 75):
    Grade = "A";
    break;

}

console.log("achived grade: " + Grade);





