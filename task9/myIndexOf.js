function myIndexOf(arr,item,from){
    const fromIndex =   from == null ? 0 :
                        from >=0 ? from :
                        from < -arr.length ? 0 :
                        arr.length + from;
    
    for(let i = fromIndex; i < arr.length; i++){
        if(arr[i]===item) return i;
    }

    return -1;
}