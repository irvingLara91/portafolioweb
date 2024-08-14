"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var RouterApp_tsx_1 = require("../src/routes/RouterApp.tsx");
var material_1 = require("@mui/material");
var Header_tsx_1 = require("../src/components/Header/Header.tsx");
function App() {
    return (<material_1.Container disableGutters maxWidth={false} sx={{ background: '#0e172a' }}>
          <main>
              <Header_tsx_1.default />
        <RouterApp_tsx_1.default />
          </main>
      </material_1.Container>);
}
exports.default = App;
