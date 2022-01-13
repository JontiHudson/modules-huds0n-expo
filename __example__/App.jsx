"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const expo_1 = require("@huds0n/expo");
const theme_1 = require("./src/theme");
function App() {
    (0, expo_1.useIsDarkMode)();
    return (<expo_1.ScreenManager initialAppearance={{
            get backgroundColor() {
                return theme_1.colors.WARN;
            },
            get bottomBar() {
                return theme_1.colors.PRIMARY;
            },
            get leftBar() {
                return theme_1.colors.BLACK;
            },
            get rightBar() {
                return theme_1.colors.BLACK;
            },
            get statusBar() {
                return theme_1.colors.PRIMARY;
            },
        }}>
      <expo_1.Toast>
        <expo_1.InputManager>
          
        </expo_1.InputManager>
      </expo_1.Toast>
    </expo_1.ScreenManager>);
}
exports.default = App;
