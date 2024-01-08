
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';




function App() {
  return (
    <div className="App">
      <h1>Prima App React!</h1>
      < ButtonComponent txtButton="bottonereact" />
      <hr />
      <ImageComponent image="https://placehold.co/600x400" title="un gatto" />
      <hr />
    </div>
  );
}

export default App;


