/** Qs. map vs forEach */
/** Ans: map returns an new array without changing the existing array whereas forEach modifies the same array. We can chain other array methods on map as it returns an array. 
 * Can't do the same in forEach array.
 */

/** Qs: Return total marks for students with marks greater than 60, after 20marks have been added to those who scored less than 60 */

let students = [
    {name: "Piyush", rollNumber: 31, marks: 80},
    {name: "Jenny", rollNumber: 15, marks: 69},
    {name:"Kaushal", rollNumber: 16, marks: 35},
    {name: "Dilpreet", rollNumber: 7, marks: 55}
];

let result = students.map(stu => stu.marks < 60 ? stu.marks + 20 : stu.marks).reduce((prevValue, currValue) => {
    if(currValue > 60){
        return prevValue + currValue;
    } else return prevValue
}, 0)

console.log(result)