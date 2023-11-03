import { Icons } from "@/components/icons";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarIcons = [
    { icon: Icons.sword },
    { icon: Icons.shieldAlert },
    { icon: Icons.history },
    { icon: Icons.shield },
    { icon: Icons.message },
    { icon: Icons.youtube },
    { icon: Icons.thunder },
  ];

  return (
    <div className="flex h-screen flex-col gap-y-4 p-4">
      <DashboardHeader />
      <div className="flex gap-x-4 grow">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-4">
              {sidebarIcons.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center h-8 w-16 rounded-lg bg-card hover:bg-neutral-800 transition cursor-pointer"
                >
                  <item.icon className="h-4 w-4" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-2 items-center">
              <div className="h-[1.5px] w-3/4 rounded-full bg-border" />
              <div className="h-8 w-8 cursor-pointer hover:bg-neutral-800 rounded-md transition grid place-items-center">
                <Icons.edit className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <div className="h-8 w-8 cursor-pointer hover:bg-neutral-800 rounded-md transition grid place-items-center">
              <Icons.user className="h-4 w-4" fill="white" />
            </div>
            <div className="h-8 w-8 cursor-pointer hover:bg-neutral-800 rounded-md transition grid place-items-center">
              <Icons.logout className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

const DashboardHeader = () => {
  const helperIcons = [
    { icon: Icons.sword, fill: "white" },
    { icon: Icons.heart, fill: "white" },
    { icon: Icons.star },
    { icon: Icons.help },
  ];

  return (
    <div className="flex items-center gap-x-4 px-3">
      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-green-500">
        <Icons.sword className="w-6 h-6 text-black" fill="black" />
      </div>
      <div className="flex gap-x-2 items-center bg-card rounded-md h-12 px-3 hover:bg-neutral-800 transition cursor-pointer">
        <div className="h-7 w-7 relative">
          <Image
            src="/images/sukrit.jpg"
            alt="sukrit's profile picture"
            className="object-cover rounded-full"
            fill
          />
        </div>
        <span className="font-semibold">Sukrit</span>
        <Icons.downarrow className="h-4 w-4" />
      </div>
      <div className="h-12 w-12 flex items-center justify-center bg-card rounded-md hover:bg-neutral-800 transition cursor-pointer">
        <Icons.unlock className="h-4 w-4" />
      </div>
      <div className="flex items-center bg-card rounded-md h-12 flex-1 px-3">
        <Icons.stream className="h-4 w-4" />
        <span className="text-sm font-medium ml-2">Stream Session 2:16:18</span>
      </div>
      <div className="flex gap-x-4 items-center bg-card rounded-md h-12 px-4">
        <>
          {helperIcons.map((item, index) => (
            <div
              key={index}
              className="grid place-items-center h-8 w-8 cursor-pointer hover:bg-neutral-800 rounded-md transition"
            >
              <item.icon className="h-4 w-4" fill={item.fill} />
            </div>
          ))}
        </>
      </div>
    </div>
  );
};
