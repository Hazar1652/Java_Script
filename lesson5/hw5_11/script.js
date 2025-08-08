let rebuilt = (arr,i1,i2)=>{
    let temp = arr[i1]; // 11
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
console.log(rebuilt([1,2,3,4],0,1));