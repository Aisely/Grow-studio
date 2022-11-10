import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";

const RadixTabs = ({ headers, children }) => {
  console.log(headers[0]);

  return (
    <TabsRoot defaultValue="tab1">
      <TabsList aria-label="Manage your account">
        {headers.map((header, index) => (
          <TabsTrigger value={`tab${index}`}>{header}</TabsTrigger>
        ))}
      </TabsList>
      {children.map((child, index) => (
      <TabsContent value={`tab${index}`}>{child}</TabsContent>
        ))}
    </TabsRoot>
  );
};

const TabsRoot = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  Border: "1px solid rgb(255 255 255 / 0.1)"
});

const TabsList = styled(Tabs.List, {
  flexShrink: 0,
  display: "flex",
});

const TabsTrigger = styled(Tabs.Trigger, {
  all: "unset",
  fontFamily: "inherit",
//   backgroundColor: "white",
  padding: "0 20px",
  height: 45,
  flex: 1,
  width: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  lineHeight: 1,
  userSelect: "none",
  Border: "1px solid rgb(255 255 255 / 0.1)",
//   "&:first-child": { borderTopLeftRadius: 6 },
//   "&:last-child": { borderTopRightRadius: 6 },
  '&:hover': { backgroundColor: "#3c5c5a" },
  '&[data-state="active"]': {
    //   color: violet.violet11,
    borderBottom: "2px solid rgb(255 255 255 / 0.1)"
    // boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
//   "&:focus": { position: "relative", boxShadow: `0 0 0 2px black` },
});

const TabsContent = styled(Tabs.Content, {
  flexGrow: 1,
  padding: 20,
  color: "white",
//   backgroundColor: "white",
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
//   "&:focus": { boxShadow: `0 0 0 2px black` },
});

const Flex = styled("div", { display: "flex" });

export default RadixTabs;
