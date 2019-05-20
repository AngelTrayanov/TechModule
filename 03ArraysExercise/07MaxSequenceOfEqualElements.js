function solve(arr){
   
    let  array=arr[0].split(' ').map(Number);
    let startingIndex=0;
    let count;
    let finalIndex=0;
    maxCount=0;
    for (let index = 0; index < array.length; index++) {
        startingIndex=index;
        count=0;
        const elementToCompare=array[index];
        for (let innerIndex = index; innerIndex < array.length; innerIndex++) {
            const element = array[innerIndex];
           
            if(element===elementToCompare){
                count++;
            }else{
           
                break;
            }
        }
        if(count>maxCount){
            maxCount=count;
            finalIndex=startingIndex;
        }
       
    }
    let result=array.splice(finalIndex,maxCount);
 
    console.log(result.join(' '));
 
}
solve(['0 1 1 2 2']);