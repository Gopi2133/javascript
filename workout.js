// to find largest of a number
var arr = [10,25,45,5];
var large= 0;

for (i=0; i<=large;i++){
    if (arr[i]>large) {
        var large=arr[i];
    }
}
console.log(large);

//to find smallest of a number
var arr = [10,25,45,5];
var small=100;

for (i=0; i<=small;i++){
    if (arr[i]<small) {
        var small=arr[i];
    }
}
console.log(small);
//star left triangle 
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//ascending order
var arr = [68,94,35,46,25];
var size = 5;



//odd even
function check(){
  function add(num1, num2){
    let sum = num1 + num2;
    return sum;
  }
  console.log(add(10,8))
  function even(){
    if (sum%2==0){
      console.log("even")
    }
    else{
      console.log("is an odd number")
    }
  }
}

var temp;
for(i = 0;i < size;i++){
  for(j = i;j < size;j++){
    if (arr[i] > arr[j+1]){
      temp = arr[i];
      arr[i] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log("ascending order:")
 for (i=1;i<=size;i++){
  console.log(arr[i])

}







//   function calculateAge (){
//     const a = new Date();
//     a.setFullYear(2022,8,4)
//     const d = new Date();
//     a.setFullYear(2004,8,28);
//     const c = a-d;
//     return c ; 
// }
// console.log(calculateAge())



//age calculator
var dob = new Date(2004,8,28);  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
  
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
  
//extract year from date      
var year = age_dt.getUTCFullYear();  
  
//now calculate the age of the user  
var age = Math.abs(year - 1970);  
  
//display the calculated age  
console.log("Age of the date entered: " + age + " years");
