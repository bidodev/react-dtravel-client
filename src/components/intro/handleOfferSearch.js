//
const handleOfferSearch = (input, defaultObj, fulldataObj) => {
    //prevent empty input treating
    if (!input) {return fulldataObj}
    //runs when input not an array already as in a quiz case
    const inputArr = input.constructor !== Array ? input.split(' ') : input;
    //tools for data/input request comparing
    const resultOffersArr = [];
    //search goes a bit smarter
    //accepting results that meets: 2 of 3/3 of 4/4 of 5 matches, allowing an user be less precise
    //also best match gets {bestMatch: true}
    //there is also a simplified version for one item search query (i.e. mood buttons)
    if (inputArr.length === 1) {
        const numOfMatches = {
            min: 1
          }
        //looping through data at once
        fulldataObj.forEach(currentOffer => {
            //search assigns every obj a matching rank
            numOfMatches.current = 0;
            inputArr.forEach(searchWord => {
                searchWord = searchWord.toLowerCase();
                for (let value of Object.values(currentOffer)) {
                    value = value.toString().toLowerCase();
                    if (value === searchWord) {numOfMatches.current++}
                }
            });
            if (numOfMatches.current > 0) {
                resultOffersArr.push(currentOffer);
            }    
        });
    } else {
        const numOfMatches = {
            min: inputArr.length - 1,
            current: 0,
            max: 5
          }
        //looping through data at once
        fulldataObj.forEach(currentOffer => {
            //search assigns every obj a matching rank
            numOfMatches.current = 0;
            inputArr.forEach(searchWord => {
                searchWord = searchWord.toLowerCase();
                for (let value of Object.values(currentOffer)) {
                    value = value.toString().toLowerCase();
                    if (value === searchWord) {numOfMatches.current++}
                }
            });
            //now checking if current obj doesn't fit, fits or fits best
            if (numOfMatches.current < numOfMatches.min) {
                return;
            } else if (numOfMatches.current === numOfMatches.min) {
                resultOffersArr.push(currentOffer);
            } else if (numOfMatches.current > numOfMatches.min || numOfMatches.current >= numOfMatches.max) {
                currentOffer["bestMatch"] = true;
                resultOffersArr.push(currentOffer);
            }
        });
    }
    //if no matches
    if(resultOffersArr.length < 1) {return defaultObj}
    //otherwise what we need
    return resultOffersArr;
  }

  export default handleOfferSearch;