"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsDarkMode = exports.isDarkMode = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
function App() {
    useIsDarkMode();
    return <react_native_1.View />;
}
exports.default = App;
function isDarkMode() {
    return react_native_1.Appearance.getColorScheme() === "dark";
}
exports.isDarkMode = isDarkMode;
function useIsDarkMode() {
    const [isDark, setIsDark] = (0, react_1.useState)(() => {
        return isDarkMode();
    });
    (0, react_1.useEffect)(() => {
        const listener = () => {
            setIsDark(isDarkMode());
        };
        react_native_1.Appearance.addChangeListener(listener);
        return () => react_native_1.Appearance.removeChangeListener(listener);
    }, []);
    return isDark;
}
exports.useIsDarkMode = useIsDarkMode;
