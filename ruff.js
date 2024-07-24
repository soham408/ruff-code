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

// console.log("achived grade: " + Grade);




// ===============ternary operator even odd=====================





let evenodd = 25

let Output = (evenodd % 2 === 0 ) ? 'even' : 'odd';

// let Output = `${(evenodd % 2 == 0) ? "given num is EVEN" : "given num is ODD"}`

if (evenodd % 2 == 0) {
//   console.log('even');
}else {
    // console.log('odd');
}

// console.log('Output');
 


// =============leap year=============

// let Year = 2001;

// function Leapyear(Year) {
//     if (Year % 4 === 0) {
//         console.log('is leap year');
//     }else {
//         console.log('not a leap year');
//     }
// }


// ============================leap year==============================

function isLeapYear(year) {
    if (year % 4 ===0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            return true;
        }
    }
    return false;
}


function checkLeapYear(year) {
    if (isLeapYear(year)) {
        // console.log("is a leap year " + year);
    }else {
        // console.log("not a leap year " + year);
    }
}

// checkLeapYear(2024);




// ===================for loop====================

for (let i = 2; i <= 20; i++) {
    const element = `outer loop value ${i}`;
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + ' = ' + i*j);
    }
    // console.log(i);
    
}



// table of 5=====>

for (let i = 1; i <=10; i++) {
    const element = i;
    // console.log(i * 5);
}



// ================sum of two num using while loop===================

// let sum = 0
let index = 1

while (index <= 10) {
// sum += index
    index ++
    // console.log(`sum of the numbers ${sum}`);
}


// ===========10 to 1 value printing for and while loop============

// for (let index = 10; index >= 1; index--) {
//     // const element = index;
//     console.log(index);
// }
    

// let i = 10
//  while (i <= 1) {
//     console.log(i);
//     i--
// }




// let ind = 1
// do {
//     console.log(`${ind}`);
//     ind ++
// } while (ind <= 5);


// ===================pattern printing===========================

let rows = 15;

for (let i = 1; i <= rows; i++) {
    let starPatter = ''; 
    
    for (let A = 1; A <= i; A++) {
         starPatter += '*';
       }
    //    console.log(starPatter);
    }
for (let i = rows; i >= 1; i--) {
    let starPatter = ''; 
    
    for (let A = 1; A <= i; A++) {
         starPatter += '*';
       }
    //    console.log(starPatter);
    }


// =======================break and continue===================

    for (let A = 1; A <= 10; A++) {
        const element = A;
        if (A === 5) {
            // console.log('detected 5');
            continue
        }
        // console.log(A);
    }

    for (let S = 1; S <=10; S++) {
        
        if (S == 7) {
            // console.log(`detected 7`);
            break
        }
        // console.log(S);
        
    }

    // ==================function==============
// even odd using functions================

    let value = 22;
    function evenOdd(params) {
        if (value % 2 == 0) {
            // console.log('even');
        }else {
            // console.log('odd');
        }
    }

    // evenOdd()
  
    

// ===============function==========
// ================finding square of number using Function============

    let val = 5;
    function square() {
    // console.log(val * val);    
    }

        // square()



       function find(number) {
        // return number * number;
       }
       const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
       numbers.forEach(num => {
        // console.log(`The square of ${num} is ${find(num)}`);
       })


       

       const findMax = function(num1, num2) {
        return num1 > num2 ? num1 : num2;
    };
    
    // Example usage
    const number1 = 10;
    const number2 = 20;
    
    const maxNumber = findMax(number1, number2);
    console.log(`The maximum of ${number1} and ${number2} is ${maxNumber}`);
    
       
