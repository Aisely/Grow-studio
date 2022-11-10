import React from "react";
import Accordion from "../../../../../ui/Accordion/Accordion";
import Topics from "../Topics/Topics";

const WeekUi = ({ week, index }) => {
  return (
    <div className="">
      <Accordion
        header={`${week.week} : ${week.title}`}
        children={<Topics topics={week.topics} index={index} />}
      />
    </div>
  );
};

export default WeekUi;
