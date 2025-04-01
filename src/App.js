import {Col} from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Col style={{width: 250}} span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
