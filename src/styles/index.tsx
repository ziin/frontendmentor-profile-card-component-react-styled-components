import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

type PropsWithRequiredChildren<T = unknown> = T & {
  children: import("react").ReactNode;
};

export function StylesProvider({ children }: PropsWithRequiredChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
