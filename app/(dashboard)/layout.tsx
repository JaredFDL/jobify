import SideBar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";

import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <SideBar />
      </div>

      <div className="lg:col-span-4">
        <NavBar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
};

export default layout;
