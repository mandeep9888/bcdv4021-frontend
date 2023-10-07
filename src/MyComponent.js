import "./App.css";

function MyComponent() {
  const handleClick = () => alert("Hello, React:");
  return (
    <>
      <h1>Hi There !!!</h1>
      <button className="btn" onClick={handleClick}>
        {" "}
        Click me for alert !!{" "}
      </button>
    </>
  );
}
export default MyComponent;
