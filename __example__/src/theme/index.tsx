import { createTheme } from "@huds0n/theming";

const theme = createTheme({
  lightColorScheme: {
    ERROR: "#B30000",
    BACKGROUND: "#FFFFFF",
    PRIMARY: "#f37735",
    SECONDARY: "#C39784",
    BACKGROUND_ALT: "#ededed",
  },
  darkColorScheme: {
    PRIMARY: "#C39784",
    SECONDARY: "#84c397",
    BACKGROUND_ALT: "#262626",
  },
  dimensions: {
    MAX_FORM_WIDTH: 400,
    INPUT_WIDTH: 250,
    BUTTON_WIDTH: 250,
    BUTTON_HEIGHT: 45,
  },
  fontSizes: {
    HEADER: 26,
  },
  spacings: {
    BORDER_RADIUS: 20,
  },
});

export const colors = theme.colors;
export const dimensions = theme.dimensions;
export const fontSizes = theme.fontSizes;
export const spacings = theme.spacings;

export const shadowStyle = {
  shadowOffset: { height: 2, width: 2 },
  shadowOpacity: 0.2,
  get shadowColor() {
    return colors.BORDER;
  },
};
