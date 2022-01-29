function merge(left,right){
let arr=[]; 
while(left.length&&right.length){
if(left[0]<right[0]){ 
arr.push(left.shift()); 
}else{ 
arr.push(right.shift());
} 
} 
return [...arr,...left,...right]; 
}  
function mergeSort(array){ 
const half=array.length/2; 
if(array.length<2){ 
return array; 
} 
const left=array.splice(0,half); 
return merge(mergeSort(left),mergeSort(array)); 
}

//[16,21,11,8,12,22] merge sort 
//after first iteration 
//[16,21,11], [8,12,22] 
//after second iteration
//[16,21],[11], [8,12],[22] 
//after third iteration 
//[16],[21],[11], [8],[12],[22] 
//after fourth iteration 
//[11],[16],[21], [8],[12],[22] 
//after fifth iteration 
//[8,11,12,16,21,22]  
//Merge sort best case, average case and worst case time complexity: O(n*log(n))
