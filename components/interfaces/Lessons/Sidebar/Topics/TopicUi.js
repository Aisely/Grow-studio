import { useState, useEffect } from "react";

const TopicUi = ({ topic, index }) => {
  return (
      <div className="my-4">
        <div>
          <p className="text-sm font-light">{`${index + 1}. ${topic.title}`}</p>
        </div>
        <div>
          <p className="text-[10px] font-thin">{topic.duration} min</p>
        </div>
      </div>
  );
};

export default TopicUi;
