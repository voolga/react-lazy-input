import { useEffect } from "react";
import { useState } from "react";
import { LazyInput } from "./components/LazyInput";

const buttonStyles = {
  margin: "10px",
  padding: "10px 15px",
  backgroundColor: "#5eaf4c",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

function App() {
  const [login, setLogin] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h1>
          Hi! I'm LAZY INPUT. I'll submit changes only after pressing Enter or
          clicking outside the input. Try
        </h1>
        <LazyInput
          value={login}
          onChange={setLogin}
          placeholder="Type login"
          style={{
            margin: "15px",
            padding: "10px",
            border: "2px solid #ddd",
            borderRadius: "4px",
            width: "300px",
          }}
        />
        <h3>You typed a login: {login}</h3>
        <button
          onClick={() => setLogin("kysk")}
          style={buttonStyles}
        >
          Use KYSK name
        </button>
        <hr />
        <button
          onClick={() => setLogin("incognito")}
          style={buttonStyles}
        >
          Use INCOGNITO name
        </button>
        <hr />
        <button
          onClick={() => setLogin("zorro")}
          style={buttonStyles}
        >
          Use ZORRO name
        </button>
      </div>
    </>
  );
}

export default App;
