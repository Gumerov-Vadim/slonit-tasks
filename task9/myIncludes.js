function myIncludes(arr,item,from){
    const fromIndex =   from == null ? 0 :
                        from >=0 ? from :
                        from < -arr.length ? 0 :
                        arr.length + from;
    const copyArr = arr.slice(fromIndex||0);
    for(let el of copyArr){
        if(el === item) return true;
    }
    return false;
}