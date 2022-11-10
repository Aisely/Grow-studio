import { useState, useEffect } from "react";
import TopicUi from "./TopicUi";

const Topics = ({ topics }) => {
  return (
    <div>
      {topics.map((topic, index) => (
        <TopicUi topic={topic} index={index}/>
      ))}
    </div>
  );
};

export default Topics;
