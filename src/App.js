import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scences/global/Topbar";
import Sidebar from "./scences/global/Sidebar";
import Dashboard from "./scences/dashboard";
import Team from "./scences/team";
import Invoices from "./scences/invoices";
import Contact from "./scences/contact";
import Form from "./scences/form";
import Calendar from "./scences/calendar";
import FAQ from "./scences/faq";
import Bar from "./scences/bar";
import Pie from "./scences/pie";
import Line from "./scences/line";
import Geography from "./scences/geography";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div className="app">
          <Sidebar isSidebar={isSidebar}></Sidebar>
          <main className="context">
            <Topbar setIsSidebar={setIsSidebar}></Topbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team></Team>}></Route>
              <Route path="/contacts" element={<Contact></Contact>} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
