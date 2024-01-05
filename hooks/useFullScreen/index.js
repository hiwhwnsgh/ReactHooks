const App = () => {
    const onFullS = (isFull) => {
      console.log(isFull ? "we are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullScreen(onFullS);
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <div ref={element}>
          <img src="https://i.namu.wiki/i/QGCwFTYnfDEm9VRk3OAzKapWMmDFYXLT7Q3Wq77H45oR0LSYKNZvl1nzAmhjBXKU7Hf01OC5u7tI6VzOCBODYUK9lnBvIcULDET4YvKe4tGnkP-We3uIazBS8_RZHhf6NTDCrFweCTPayyz8ASoFjg.webp" />
          <button onClick={exitFull}>Exit fullScreen</button>
        </div>
  
        <button onClick={triggerFull}>Make fullScreen</button>
      </div>
    );
  };
  
  export default App;