
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import { TableComponent } from './components/TableComponent';


let users = [];

const promise = await fetch('https://jsonplaceholder.typicode.com/users');
users = await promise.json();

function App() {
  return (
    <div className="App">
      <h1>Prima App React!</h1>
      < ButtonComponent txtButton="bottonereact" />
      <hr />
      <ImageComponent image="https://cms-cdn.placeholder.co/toronto_be6ed650f3.png?width=384" title="un gatto" />
      <hr />
      <TableComponent listaUtenti={users} />
    </div>
  );
}

export default App;


