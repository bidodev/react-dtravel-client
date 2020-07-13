import React, {useState} from "react";
import ExperienceItem from "./experiences/experience.item.component";
import { useSelector} from "react-redux";


const Main = () => {

  //just a workarround to work..
  const [startIndex, setStartIndex] = useState(0)
  const [finalIndex, setFinalIndex] = useState(2)

  const offersFullData = useSelector((state) => state.destinations);

  const otherArr = offersFullData.slice(startIndex, finalIndex)

  const handlePage = () => {
    if (finalIndex >= offersFullData.length) {
      setStartIndex(0)
      setFinalIndex(2)
    }
    const start = startIndex + 1;
    const final = finalIndex + 1;
    setStartIndex(start)
    setFinalIndex(final)
  }

  return (
    <div className="aside-main">
      <h1>Discover</h1>

      <div className="aside-main__carrousel">
        {otherArr.map(({...item}) => (<ExperienceItem {...item}/>))}
      </div>
      <div className="pagination">
        <ion-icon name="chevron-back-outline" onClick={handlePage}></ion-icon>
        <ion-icon name="chevron-forward-outline" onClick={handlePage}></ion-icon>
      </div>
    </div>
  );
};

export default Main;
