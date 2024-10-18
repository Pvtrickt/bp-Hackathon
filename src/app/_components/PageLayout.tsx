import { ReactElement } from "react";
import SideNavBar from "./SideNavbar";

const PageLayout = (props: { children: ReactElement }) => {
  return (
    <div className="flex w-screen">
      <SideNavBar />
      <div className="flex grow flex-col rounded-md bg-gray-100">
        <header className="bg-brand-purple-light h-20 text-white">
          <h1 className="text-xl"></h1>
        </header>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
