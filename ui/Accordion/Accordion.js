import React from "react";
import { styled, keyframes } from "@stitches/react";
// import { violet, blackA, mauve } from "@radix-ui/colors";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
//   borderRadius: 6,
//   width: 300,
  // boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    // borderTopLeftRadius: 4,
    // borderTopRightRadius: 4,
  },

  "&:last-child": {
    // borderBottomLeftRadius: 4,
    // borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    // boxShadow: `0 0 0 2px ${mauve.mauve12}`,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  backgroundColor: "#000",
  all: "unset",
  display: "flex",
//   height: "80px"
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  padding: "0 20px",
  height: 70,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // backgroundColor: "#000",
  fontSize: 15,
  lineHeight: 1,
  borderBottom: "1px solid rgb(255 255 255 / 0.1)",
  // borderTop: "1px solid rgb(255 255 255 / 0.1)",
//   color: violet.violet11,
//   boxShadow: `0 1px 0 ${mauve.mauve6}`, 
  '&[data-state="closed"]': { opacity: 0.7 },
  '&[data-state="open"]': { opacity: 1 },
  "&:hover": { backgroundColor: "#3c5c5a" , opacity: 1},
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  fontSize: 15,
//   color: mauve.mauve11,
//   backgroundColor: mauve.mauve2,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "15px 20px",
});

// const StyledChevron = styled(ChevronDownIcon, {
//   color: violet.violet10,
//   transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
//   "[data-state=open] &": { transform: "rotate(180deg)" },
// });

const RadixAccordion = StyledAccordion;
const RadixAccordionItem = StyledItem;
const RadixAccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        {/* <StyledChevron aria-hidden /> */}
      </StyledTrigger>
    </StyledHeader>
  )
);
const RadixAccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);



const Accordion = ({
    children,
    header,
    isActive = false
}) => {
  return (
    <RadixAccordion type="single" defaultValue="item-1" collapsible>
    <RadixAccordionItem value="item-1">
      <div>
        <RadixAccordionTrigger>
          <div className="text-lg">
          {header}
          </div>
        </RadixAccordionTrigger>
      </div>
      <RadixAccordionContent>{children}</RadixAccordionContent>
    </RadixAccordionItem>
    </RadixAccordion>
  )
}

export default Accordion