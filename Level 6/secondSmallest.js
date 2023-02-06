function getSecondSmallest(nums) {
    // Complete the function
    let smallest = nums[0];
    let secondSmallest = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < smallest){
            smallest = nums[i];
        } 
    }
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== smallest){
            if(nums[i] < secondSmallest){
                secondSmallest = nums[i];
            }
        }
    }
    
    return secondSmallest;
}

console.log(getSecondSmallest([1, 5 ,6 ,7 ,8 ,9, -3, -7]));
