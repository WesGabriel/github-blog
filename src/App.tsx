import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}
