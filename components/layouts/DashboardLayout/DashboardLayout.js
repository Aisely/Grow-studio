import LayoutHeader from "./LayoutHeader/LayoutHeader";
import NavigationBar from "./NavigationBar/NavigationBar";

const DashboardLayout = ({children}) => {
  return (
    <div className="flex h-full bg-[#244645]">
      <NavigationBar />
        <main className="w-full">
          <LayoutHeader />
          {children}
        </main>
    </div>
  );
};


export default DashboardLayout;
