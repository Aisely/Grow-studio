import Image from "next/image";
import user from "../../../../public/User.svg";
import home from "../../../../public/Home.svg";
import settings from "../../../../public/Gear.svg";
import lessons from "../../../../public/Class.svg";

export const generatePageRoutes = () => {
    return [
        {
            key: 'home',
            label: 'Home',
            link: '/home',
            icon: (
                <Image src={home} layout="responsive" />
            )
        },
        {
            key: 'profile',
            label: 'Profile',
            link: '/profile',
            icon: (
                <Image src={user} layout="responsive" />
            )
        },
        {
            key: 'lessons',
            label: 'Lessons',
            link: '/lessons',
            icon: (
                <Image src={lessons} layout="responsive" />
            )
        },
        {
            key: 'settings',
            label: 'Settings',
            link: '/settings',
            icon: (
                <Image src={settings} layout="responsive" />
            )
        },
    ]
}
