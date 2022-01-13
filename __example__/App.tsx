import React from "react";

import {
  Stack,
  InputManager,
  ScreenManager,
  Toast,
  useIsDarkMode,
} from "@huds0n/expo";

import { colors } from "./src/theme";

export default function App() {
  useIsDarkMode();

  return (
    <ScreenManager
      initialAppearance={{
        get backgroundColor() {
          return colors.BACKGROUND;
        },
        get bottomBar() {
          return colors.PRIMARY;
        },
        get leftBar() {
          return colors.BLACK;
        },
        get rightBar() {
          return colors.BLACK;
        },
        get statusBar() {
          return colors.PRIMARY;
        },
      }}
    >
      <Toast>
        <InputManager>
          {/* <Stack
            navigator={Navigator}
            screens={{
              Application: <Application />,
              Auth: <Auth />,
              CardView: <CardView />,
              Home: <Home />,
              PhoneVerify: <PhoneVerify />,
              SignUp: <SignUp />,
              SplashScreen: <SplashScreen />,
            }}
            screenStyle={{
              backgroundColor: colors.BACKGROUND,
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 10,
              shadowOpacity: 0.25,
              shadowColor: colors.BORDER,
              zIndex: -1,
            }}
          /> */}
        </InputManager>
      </Toast>
    </ScreenManager>
  );
}
