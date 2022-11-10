import { generatePageRoutes } from "./NavigationBar.utils";
import NavigationIconButton from "./NavigationIconButton";
import { useRouter } from 'next/router'

const NavigationBar = ({ children }) => {
  const router = useRouter()
  const pageRoutes = generatePageRoutes()
  

  return (
    <div className="flex min-h-[600px] bg-[#244645]">
      <div className=" flex w-14 flex-col justify-center overflow-y-hidden border-r border-white border-opacity-10 p-2">
        <div></div>
        <div className="flex-col items-center justify-center space-y-4  ">
          {
            pageRoutes.map((route) => (
              <NavigationIconButton
                key={route.key}
                route={route}
                isActive={ router.asPath == route.link }
              />
            ))
          }
          {/* <div className="rounded cursor-pointer w-full p-2 transition duration-300 hover:bg-[#45899c]">
            <Link href="/profile">
              <Image src={user} layout="responsive"/>
            </Link>
          </div>
          <div className="cursor-pointer p-2">
            <Link href="/settings">
              <Image src={settings} layout="responsive" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
