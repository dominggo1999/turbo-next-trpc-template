import { useState } from "react";
import clsx from "clsx";
import { AiFillCamera, AiFillCompass, AiFillFacebook } from "react-icons/ai";

import { Button } from "../Button";
import { HeaderContainer } from "../Header";
import Sidebar from "./Sidebar";
import SidebarLink from "./SidebarLink";

export const Default = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="relative flex w-full overflow-hidden">
      <Sidebar setOpen={setOpen} open={open}>
        <SidebarLink
          icon={<AiFillCamera />}
          to="https://www.google.com/"
          onClick={close}
          target="_blank"
        >
          Dashboard
        </SidebarLink>
        <SidebarLink
          icon={<AiFillFacebook />}
          to="https://www.google.com/"
          onClick={close}
          target="_blank"
        >
          Products
        </SidebarLink>
        <SidebarLink
          icon={<AiFillCompass />}
          to="https://www.google.com/"
          onClick={close}
          target="_blank"
        >
          Cart
        </SidebarLink>
      </Sidebar>
      <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-transparent">
        <HeaderContainer>Hello World</HeaderContainer>
        <div className="mt-16 flex p-2">
          <Button
            className={clsx("ml-auto", open && "pointer-events-none")}
            onClick={() => setOpen(!open)}
          >
            Toggle Sidebar
          </Button>
        </div>
      </div>
    </div>
  );
};

Default.meta = { iframed: true };
