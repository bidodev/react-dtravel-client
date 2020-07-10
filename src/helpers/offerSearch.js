import offerData from "../data.json";

//obj to return for no match
const noOffer = [
    {
    "id": 404,
    "description": "Try one more time",
    "photo": "../public/img/404.jpg",
    "country": "Neverland"
}
];

//
export const handleOfferRequest = input => {
    //runs when input not an array already as in a quiz case
    const inputArr = input.constructor !== Array ? input.split(' ') : input;
    //prevent empty input treating
    if (!inputArr.length) {return offerData}
    //tools for data/input request comparing
    resultArr = [];
    //search goes a bit smarter
    //accepting results that meets: 2 of 3/3 of 4/4 of 5 matches, allowing an user be less precise
    //also best match gets {bestMatch: true}
    //there is also a simplified version for one item search query (i.e. mood buttons)
    if (inputArr.length === 1) {
        //looping through data at once
        offerData.forEach(currentOffer => {
            //search assigns every obj a matching rank
            numOfMatches.current = 0;
            inputArr.forEach(searchWord => {
                searchWord = searchWord.toLowerCase();
                for (let value of Object.values(currentOffer)) {
                    value = value.toLowerCase();
                    if (value === searchWord) {numOfMatches.current++}
                }
            });
            if (numOfMatches.current > 0) {
                resultArr.push(currentOffer);
            }    
        });
    } else {
        const numOfMatches = {
            min: inputArr.length - 1,
            current: 0,
            max: 5
        }
        //looping through data at once
        offerData.forEach(currentOffer => {
            //search assigns every obj a matching rank
            numOfMatches.current = 0;
            inputArr.forEach(searchWord => {
                searchWord = searchWord.toLowerCase();
                for (let value of Object.values(currentOffer)) {
                    value = value.toLowerCase();
                    if (value === searchWord) {numOfMatches.current++}
                }
            });
            //now checking if current obj doesn't fit, fits or fits best
            if (numOfMatches.current < numOfMatches.min) {
                continue
            } else if (numOfMatches.current === numOfMatches.min) {
                resultArr.push(currentOffer);
            } else if (numOfMatches.current > numOfMatches.min || numOfMatches.current >= numOfMatches.max) {
                currentOffer["bestMatch"] = true;
                resultArr.push(currentOffer);
            }
        });
    }
    //if no matches
    if(resultOfferData.length < 1) {return noOffer}
    //otherwise what we need
    return resultArr;
}

