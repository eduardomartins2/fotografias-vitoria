import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home/Home";
import { Aniversario } from "./pages/Aniversario/Aniversario";
import { Newborn } from "./pages/Newborn/Newborn";
import { Eventos } from "./pages/Eventos/Eventos";
import { Batizado } from "./pages/Batizado/Batizado";
import { Familia } from "./pages/Familia/Familia";
import { Feminino } from "./pages/Feminino/Feminino";
import { Gestante } from "./pages/Gestante/Gestante";
import { Infantil } from "./pages/Infantil/Infantil";
import { PreAniversario } from "./pages/PreAniversario/PreAniversario";
import { SmashTheCake } from "./pages/SmashTheCake/SmashTheCake";
import { SmashTheFruit } from "./pages/SmashTheFruit/SmashTheFruit";

import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "aniversario", element: <Aniversario /> },
      { path: "newborn", element: <Newborn /> },
      { path: "eventos", element: <Eventos /> },
      { path: "batizado", element: <Batizado /> },
      { path: "familia", element: <Familia /> },
      { path: "feminino", element: <Feminino /> },
      { path: "gestante", element: <Gestante /> },
      { path: "infantil", element: <Infantil /> },
      { path: "preaniversario", element: <PreAniversario /> },
      { path: "smash-the-cake", element: <SmashTheCake /> },
      { path: "smash-the-fruit", element: <SmashTheFruit /> },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
