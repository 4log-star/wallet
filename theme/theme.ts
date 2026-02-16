import { darkColors } from "./colors/dark";
import { lightColors } from "./colors/light";
import { radius } from "./radius";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const darkTheme = {
  colors: darkColors,
  spacing,
  typography,
  radius,
};

export const lightTheme = {
  colors: lightColors,
  spacing,
  typography,
  radius,
};

export type AppTheme = typeof darkTheme;
