import {shallowEqual, useDispatch, useSelector} from "react-redux";
import "./App.css";
import {useEffect} from "react";
import {fetchPokemonsWithDetails} from "./slices/dataSlice";
import {Col, Spin} from "antd";
import logo from "./statics/logo.svg";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
