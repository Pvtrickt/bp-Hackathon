import { ReactElement } from "react";
import SideNavBar from "./SideNavbar";

const PageLayout = (props: { children: ReactElement }) => {
  return (
    <div className="flex w-screen">
      <SideNavBar />
      <div className="flex grow flex-col rounded-md bg-gray-100">
        <header
          className="h-20 bg-brand-purple-light text-white"
          style={{ boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)" }}
        >
          <h1 className="text-xl"></h1>
        </header>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
