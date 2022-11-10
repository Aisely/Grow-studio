import React, { useState, useEffect } from "react";
import RadixTabs from "../../../../ui/Tabs/Tabs";
import { weeksData } from "../Sidebar/Weeks/weeksData";

const tabsHeaders = [
  [
    "Transcripts",
    "Resources Links",
  ], 
  [
    "Presentation slides will be here",
    "Links will be here"
  ]
];



const LowerPanel = () => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    setResources(weeksData);
  }, []);
  console.log(resources);

  return (
    <div>
      <RadixTabs headers={tabsHeaders[0]} children={tabsHeaders[1]} />
    </div>
  );
};

export default LowerPanel;
