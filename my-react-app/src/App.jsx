import { useState } from "react";
import "./App.css";


import Cat from "./pages/Cat.jsx";
import Home from "./pages/Ｈome.jsx";
import Mouse from "./pages/Mouse.jsx";

function App() {
  const [page, setPage] = useState(1); // 預設首頁

  return (
    <div className="app">
      {/* 上方三格選單 */}
      <div className="topbar">
        <div
          className={`tab ${page === 0 ? "active" : ""}`}
          onClick={() => setPage(0)}
        >
          貓貓
        </div>
        <div
          className={`tab ${page === 1 ? "active" : ""}`}
          onClick={() => setPage(1)}
        >
          首頁
        </div>
        <div
          className={`tab ${page === 2 ? "active" : ""}`}
          onClick={() => setPage(2)}
        >
          鼠鼠
        </div>
      </div>

      {/* 中間內容區 */}
      <div className="page">
        {page === 0 && <Cat />}
        {page === 1 && <Home />}
        {page === 2 && <Mouse />}
      </div>
    </div>
  );
}

export default App;