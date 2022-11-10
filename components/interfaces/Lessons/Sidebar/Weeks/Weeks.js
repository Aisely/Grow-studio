import { useState, useEffect } from "react";
import { weeksData } from "./weeksData";
import WeekUi from "./WeekUi";

const Weeks = () => {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    setWeeks(weeksData)
  }, [])

  return (
    <div className="">
      <ul>
        {weeksData.map((week, index) => (
          <WeekUi week={week} index={index}/>
        ))}
      </ul>
    </div>
  );
};

export default Weeks;
