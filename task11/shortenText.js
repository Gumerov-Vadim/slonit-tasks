//2
function shortenText(text, limit){
    const slicedText = text.slice(0,limit);
    
    if(slicedText.length === text.length) return text;

    const splitedText = slicedText.split(/[^a-zA-Zа-яА-Я0-9]/g);
    const lastWord = splitedText.pop();
    if(!lastWord.length) return slicedText + "...";
    return slicedText.slice(0,-lastWord.length) + "...";
}