import { MdStars } from "react-icons/md";

import NumberIcon from "./NumberIcon";

export const Default = () => {
  return <NumberIcon number={300} icon={<MdStars />} />;
};

export const Reverse = () => {
  return <NumberIcon iconPosition="right" number={300} icon={<MdStars />} />;
};
