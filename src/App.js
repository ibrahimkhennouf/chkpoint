import "./App.css";
import ImgInSrc from "./ImgInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Ibrahim</h1>
        <br />
        <img src={ImgInSrc} />
        <br />
        <img src="C:/Users/USER/Desktop/chkpoint/public/ImgInPublic.jpg" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
