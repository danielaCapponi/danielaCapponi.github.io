import { globalDark, globalLight } from "./themeSpecs/global";
import { togglerDark, togglerLight } from "./themeSpecs/toggler";

export const lightTheme = {
  ...togglerLight,
  ...globalLight,
};

export const darkTheme = {
  ...togglerDark,
  ...globalDark,
};
