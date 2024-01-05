import "./styles.css";



const App = () => {
  const maxLn = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLn);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
