const App = () => {
    const handleNetworkChange = (online) => {
      console.log(online ? "we just went online" : "We are offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
      <div className="App">
        <h1>{onLine ? "OnLine" : "OffLine"}</h1>
      </div>
    );
  };
  
export default App;