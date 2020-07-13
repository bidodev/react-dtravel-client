//
let numOfCalls = 0;
const handleOfferSearch = ({input}, defaultItem, fulldata) => {
  numOfCalls++;
  console.log("numOfCalls " + numOfCalls);
  //prevent empty input treating
  if (input === undefined || input === null) {
    console.log(numOfCalls + ": input is empty");
    return fulldata;
  }
  //search goes a bit smarter
  //------
  //tools for data/input request comparing
  //accepting results that meets: 2 of 3/3 of 4/4 of 5 matches, allowing an user be less precise
  //also best match gets {bestMatch: true}
  const numOfMatches = {
    //leaves an entry point for custom this.max values
    max: (max) => max,
    get min() {
      //handles also one word search
      return inputArr.length === 1 ? 1 : Math.floor((inputArr.length * 3) / 4);
    },
    current: 0,
  };
  //storage for matches
  const resultObjsArr = [];
  const controlResultArr = [];
  //treats when the input isn't an array but one item string
  const inputArr = input.constructor !== Array ? input.split(" ") : input;
  //handling string/number case
  fulldata = fulldata.constructor !== Array ? fulldata.split(" ") : fulldata;
  //checking every item {currentObj} in offers.db how it meets the query input
  inputArr.forEach((inputElem) => {
    inputElem = inputElem.toLowerCase();
    const inputElemToArr = [...inputElem];
    fulldata.forEach((fulldataElem) => {
      //handleSearch assigns every obj a matching rank
      numOfMatches.current = 0;
      let fulldataElemToArr = fulldataElem;
      //first, handling a loop for an outer cycle, JSON/array of objects
      if (fulldataElem.constructor === Object) {
        fulldataElemToArr = Object.entries(fulldataElem);
      }
      //now we are inside of an Object
      for (let [key, value] of fulldataElemToArr) {
        if (key === "description" || key === "src" || key === "bestMatch") {
          continue;
        }
        //same idea for spellCheck
        const valueToArr = [...value.toString()];
        const spellNumOfMatches = {
          get min() {
            const controlArr = valueToArr.length >= inputElemToArr.length ? valueToArr : inputElemToArr;
            return controlArr.length === 1
              ? 1
              : Math.floor((controlArr.length * 3) / 4);
          },
          current: 0,
        };
        if (inputElemToArr[0] === valueToArr[0]) {
        inputElemToArr.forEach((inputLetter) => {
          if (valueToArr.includes(inputLetter)) {
            spellNumOfMatches.current++;
          }
        });
      }
        if ((spellNumOfMatches.current >= spellNumOfMatches.min) || (value === inputElem)) {
          console.warn(value)
          console.warn("PASSED " + inputElem)
          numOfMatches.current++;
        }
      }
      if (controlResultArr.includes(fulldataElem.id)) {return}
      //now checking if current item doesn't fit, fits or fits best
      if (numOfMatches.current === numOfMatches.min) {
        resultObjsArr.push(fulldataElem);
        controlResultArr.push(fulldataElem.id)
      } else if (
        numOfMatches.current >= numOfMatches.max(5) ||
        numOfMatches.current >= inputArr.length
      ) {
        if (fulldataElem.constructor === Object) {
          fulldataElem["bestMatch"] = true;
        }
        resultObjsArr.push(fulldataElem);
        controlResultArr.push(fulldataElem.id)
      }
      return;
    });
  });
  //if nothing matches
  if (resultObjsArr.length < 1) {
    return defaultItem;
  }
  //otherwise what we need
  console.log(resultObjsArr)
  return resultObjsArr;
};

export default handleOfferSearch;
