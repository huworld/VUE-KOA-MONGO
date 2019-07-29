    /* 选择排序(选出最小的元素与当前位置交换) */
module.exports = function(arr) { 

    for( i = 0 ; i<arr.length ; i++ ){
        let minIndex = i
        for(j=i+1 ; j<arr.length ; j++){
            if( arr[j]<arr[minIndex] ){
                minIndex = j
            }
        }
        let temp;
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp
    }
    console.log(arr)
    return arr
}