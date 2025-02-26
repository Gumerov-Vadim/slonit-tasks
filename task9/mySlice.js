function mySlice(arr, start, end){
    let startIndex, endIndex;
    if(start==null){
        startIndex = 0;
    } else {
        startIndex = start >= 0 ? start : arr.length + start;
    }

    if(end==null){
        endIndex = arr.length;
    } else {
        endIndex = end >= 0 ? end : arr.length + end;
    }

    return arr.filter((_,indx)=>indx>=startIndex&&indx<endIndex);
}
