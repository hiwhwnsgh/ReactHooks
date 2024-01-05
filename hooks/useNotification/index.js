const App = () => {
    const triggerNotif = useNotification("Can I steal your kimchi", {
      body: "I love kimchi dont you",
    });
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <h1> hello </h1>
        <button onClick={triggerNotif}>버튼</button>
      </div>
    );
  };
  
  export default App;