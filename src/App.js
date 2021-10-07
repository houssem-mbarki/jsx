import logo from './logo.svg';
import './App.css';
import imageInPublic from "./test.jpg";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black;max-width:100vw'}}>
      <h1 className="title red">houssem eddine mbarki</h1>
      
      <br/>
      <img src="/téléchargé.jpg" alt="ffds"/>
       <br/>
       <img src={imageInPublic} alt="fffff" />
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CyleWZEKPtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>


    </div>
  );
}

export default App;
