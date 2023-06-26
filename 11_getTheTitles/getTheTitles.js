const getTheTitles = function(books) {
    let bookArr = [];
    for(let book in books){
        if(books[book].title != undefined){
        bookArr.push(books[book].title);
        }
    }
    return bookArr;
};

// Do not edit below this line
module.exports = getTheTitles;
