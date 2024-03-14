import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global/GlobalStyle";
import theme from "./styles/global/theme";
import Layout from "./components/layout/Layout";

function App() {

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Layout></Layout>
      </ThemeProvider>
    </>
  )
}

export default App
