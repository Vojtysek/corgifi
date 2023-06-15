import { MenuProps } from "../MenuBar";
import { FaCompass, FaMusic } from "react-icons/fa";
import Scenes from "../Menus/Scenes";
import Mixer from "../Menus/Mixer";

export const Menus: MenuProps[] = [
  {
    name: "Scenes",
    icon: <FaCompass />,
    component: <Scenes />,
  },
  {
    name: "Mixer",
    icon: <FaMusic />,
    component: <Mixer />,
  },
];
