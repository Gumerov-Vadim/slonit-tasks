function objectToSumNumbers(obj){
    let sum = 0;
    for(let el in obj){
        const curNum = obj[el];
        if(typeof curNum !== 'number') continue;
        sum += curNum;
    }
    return sum
}
function objectToArrayNames(obj){
    let copyObj = {...obj};
    let result = [];

    for(let el in obj){
        const curNum = obj[el];
        if(typeof curNum !== 'number') continue;
        
        result.push([el,curNum]);
    }

    result.sort((a,b)=>b[1]-a[1]);
    return result.map(el=>el[0]);
}

// const exampleObj = {
//     a:"a",
//     b:1,
//     c:"c3",
//     d:4,
//     e:"dfg",
//     f:"5gd",
// }

const exampleObj = {name: 'Vasya', friends: 5, likes: 19, projects: 7};

console.log(objectToSumNumbers(exampleObj));

console.log(objectToArrayNames(exampleObj));