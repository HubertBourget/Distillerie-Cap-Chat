import Main from "./main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuYannick } from './container';
import TOS from './container/TOS';
import ProgrammePrivilege from './container/programmeprivilege';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/en" element={<Main lang="en" />} />
        <Route exact path="/yannickouellet" element={<MenuYannick />} />
        <Route exact path="/tos" element={<TOS />} />
        <Route exact path="/programmeprivilege" element={<ProgrammePrivilege />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
