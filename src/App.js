import {useEffect} from "react";
import {Col, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import {getPokemonsWithDetails, setLoading} from "./actions";
import {getPokemon} from "./api";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.get("pokemons")).toJS();
  const loading = useSelector((state) => state.get("loading"));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col style={{width: 250}} span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='loading' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
