import NavBar from "./NavBar";

export default function DevInfo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavBar />
      <p style={{ marginTop: "60px" }}>
        This project is all developed by Ledi Li
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/ledili2424/Conway-s-Game-of-Life">
          GitHub Repo
        </a>
      </p>
    </div>
  );
}
