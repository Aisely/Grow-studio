import LayoutHeader from "./LayoutHeader/LayoutHeader";
import NavigationBar from "./NavigationBar/NavigationBar";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Spinner } from '@chakra-ui/react'
const DashboardLayout = ({ children }) => {
  return (
 
      <div className="flex h-full bg-[#244645] overflow-y-hidden">
        <Tooltip.Provider>
          <NavigationBar />
        </Tooltip.Provider>
        <main className="w-full">
          <LayoutHeader />
          {children}
        </main>
      </div>
  );
};

export default DashboardLayout;
