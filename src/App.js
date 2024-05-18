import "./App.css";
import React from "react";
import Profile from "./components/Profile.js";
import SearchBar from "./components/SearchBar.js";
import TimeStamp from "./components/TimeStamp.js";

function App() {
  return (
    <main>
      <aside>
        <Profile />
        <TimeStamp />
      </aside>
      <div>
        <SearchBar />
      </div>
    </main>
  );
}

export default App;
