/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var arr1 = [];

//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'
for (i=0; i<10; i++)
{
	k = Math.round(Math.random()*100);
    arr1.push(k);
}

console.log("The arr1 is : " + arr1);


//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
arr1.shift();
console.log("The arr1 without first element : " + arr1)

//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
arr1.pop();
console.log("The arr1 without last element  : " + arr1)

//Question: how many elements does arr1 have at this moment?
console.log("arr1 has 8 elements at this moment")

//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = [];
for(i=0; i<7; i++)
{
	arr2.unshift(arr1[i]);
}
console.log("The arr2 is" + arr2)



//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var arr3 = arr1.filter(function(el){
    //your code here
   var a = el%2
    	if(a == 0){
    		return el	
    	}
    
});
console.log(arr3);