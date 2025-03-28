import PokemonCard from "./PokemonCard";

const PokemonList = ({pokemons = Array(10).fill("")}) => {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        return <PokemonCard />;
      })}
    </div>
  );
};

export default PokemonList;
