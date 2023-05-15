import { AiOutlineSearch } from "react-icons/ai";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";

import { useFullscreen } from "../../hooks";
import { Brand } from "../Brand";
import HeaderContainer from "./HeaderContainer";
import HeaderIconButton from "./HeaderIconButton";

export const Default = () => {
  const { fullscreen, toggle } = useFullscreen();

  return (
    <div className="relative">
      <HeaderContainer>
        <div className="flex h-full w-full items-center justify-between py-3">
          <Brand />
          <div className="flex items-center gap-x-2">
            <HeaderIconButton
              onClick={toggle}
              icon={fullscreen ? <BiExitFullscreen /> : <BiFullscreen />}
            />
            <HeaderIconButton icon={<MdDarkMode />} />
            <HeaderIconButton icon={<AiOutlineSearch />} />
          </div>
        </div>
      </HeaderContainer>
      <div className="mt-[1000px]">
        <p>Hello World </p>
      </div>
    </div>
  );
};

Default.meta = { iframed: true };
