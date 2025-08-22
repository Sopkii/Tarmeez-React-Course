import "./App.css";
import Post from "./components/Post/post.component";
import Button from "./components/button/button.component";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 800px 1fr",
        gap: "10px",
      }}
    >
      <nav
        style={{
          gridColumn: "1 / 4",
          backgroundColor: "blue",
          padding: "40px",
          marginBottom: "5px",
        }}
      >
        <span style={{ color: "white", fontSize: "32px", fontWeight: "bold" }}>
          Tarmeez Academy
        </span>
      </nav>
      <div
        className="posts"
        style={{
          display: "flex",
          flexFlow: "column",
          gridColumn: "2 / 3",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          border: "2px solid blue",
          padding: "10px",
          margin: "15px",
          gridColumn: "3 / 4",
          alignItems: "start",
        }}
        className="buttons"
      >
        {Array.from({ length: 13 }).map((_, index) => (
          <Button key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
