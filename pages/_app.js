import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";

function MyApp({ Component, pageProps }) {
  console.log("layout obj", Component);
  return (
    //  <ChakraProvider>
    //  {/* </ChakraProvider> */}
    <Tooltip.Provider>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </Tooltip.Provider>
  );
}

export default MyApp;
