function normalizeInput(str){
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
}

function shortenText(text, limit){
    const slicedText = text.slice(0,limit);
    
    if(slicedText.length === text.length) return text;

    const splitedText = slicedText.split(/[^a-zA-Zа-яА-Я0-9]/g);
    const lastWord = splitedText.pop();
    if(!lastWord.length) return slicedText + "...";
    return slicedText.slice(0,-lastWord.length) + "...";
}

function checkSubstringRelation(str1, str2){
    return str1.includes(str2)||str2.includes(str1);
}