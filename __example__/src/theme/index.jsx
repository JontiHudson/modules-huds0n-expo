"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowStyle = exports.spacings = exports.fontSizes = exports.dimensions = exports.colors = void 0;
const theming_1 = require("@huds0n/theming");
const theme = (0, theming_1.createTheme)({
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
exports.colors = theme.colors;
exports.dimensions = theme.dimensions;
exports.fontSizes = theme.fontSizes;
exports.spacings = theme.spacings;
exports.shadowStyle = {
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.2,
    get shadowColor() {
        return exports.colors.BORDER;
    },
};
