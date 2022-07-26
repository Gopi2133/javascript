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