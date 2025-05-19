
import styled from 'styled-components';
import Pokemon from '../interfaces/Pokemon';

type PokemonProps = {
  pokemon: Pokemon;
};

type CardProps = {
  name: string;
}

const Card = styled.section<CardProps>`
  height: 700px;
  width: 400px;
  border-radius: 7px;
  font-family: sans-serif;
  box-shadow: 10px 10px 20px rgb(88, 86, 86, 0.5);
  background-image: ${({ name }) => {
    switch (name) {
      case 'mewtwo':
        return 'linear-gradient(to right, rgb(236, 230, 237), rgb(188, 165, 197));';
      case 'pikachu':
        return 'linear-gradient(to right, rgb(246, 217, 53), rgb(234, 232, 113));';
      case 'charizard':
        return 'linear-gradient(to right, rgb(206, 135, 73), rgb(187, 111, 97));';
      case 'pidgeot':
        return 'linear-gradient(to bottom right,rgb(208, 161, 72), rgb(180, 135, 183));';
      case 'gyarados':
        return 'linear-gradient(to right, rgb(131, 153, 224), hsl(222, 80.40%, 46.10%));';
      default:
        return 'gray';
    }
  }};
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
`;


const ImageWrapper = styled.div`
  margin-bottom: 15px;
    justify-content: center;
`;

const PokemonImage = styled.img`
  width: 300px;
  height: 300px;
`;

const TextWrapper = styled.div`
  margin-top: 15px;
    margin-bottom: 15px;
    position: relative;
    padding-top: 15px;
    height: calc(100% - 270px);
    border-radius: 8px;
    background-color: rgb(256,256,256, 0.3);
`;

const PokemonType = styled.div`
    margin: 0px;
    position: absolute;
    padding: 0px 10px;
    background-color: black;
    top: -18px;
    right: 20px;
    text-transform: uppercase;
    color: white;
    font-size: 14px;
    border-radius: 6px;
    height: 36px;
    align-content: center;
`;

const PokemonName = styled.div`
    margin: 0;
    padding: 0;
    font-weight: 800;
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 20px;
    text-align: center;
`;

const Column = styled.div`
`;

const PokemonInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 25px;
    ${Column}{
    margin: 0px;
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    }
`;


const PokemonColumn = styled.div`
  padding: 0;
    padding-right: 5px;
    text-transform: uppercase;
    display: flex;
    flex-basis: 50%;
    justify-content: flex-end;
    align-items: center;
    font-weight: 200;
    font-size: 12px;
`;

const PokemonValue = styled.div`
   padding: 0;
    padding-left: 5px;
    text-transform: uppercase;
    display: flex;
    flex-basis: 50%;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
`;



const PokemonCard = ({pokemon} : PokemonProps) => {
  return (
    <Card name={pokemon.name}>
      <ImageWrapper>
        <PokemonImage src={pokemon.image} alt={pokemon.name} />
      </ImageWrapper>
      <TextWrapper>
        <PokemonType>{pokemon.type}</PokemonType>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonInfo>
          <PokemonColumn>HP:</PokemonColumn>
          <PokemonValue>{pokemon.hp}</PokemonValue>
        </PokemonInfo>
        <PokemonInfo>
          <PokemonColumn>Attack:</PokemonColumn>
          <PokemonValue>{pokemon.attack}</PokemonValue>
        </PokemonInfo>
        <PokemonInfo>
          <PokemonColumn>Defense:</PokemonColumn>
          <PokemonValue>{pokemon.defense}</PokemonValue>
        </PokemonInfo>
        <PokemonInfo>
          <PokemonColumn>Special Attack:</PokemonColumn>
          <PokemonValue>{pokemon.specialAttack}</PokemonValue>
        </PokemonInfo>
        <PokemonInfo>
          <PokemonColumn>Special Defense:</PokemonColumn>
          <PokemonValue>{pokemon.specialDefense}</PokemonValue>
        </PokemonInfo>
        <PokemonInfo>
          <PokemonColumn>Speed:</PokemonColumn>
          <PokemonValue>{pokemon.speed}</PokemonValue>
        </PokemonInfo>
        <PokemonInfo>
          <PokemonColumn>Height:</PokemonColumn>
          <PokemonValue>{pokemon.height}m</PokemonValue>
        </PokemonInfo>
        <PokemonInfo>
          <PokemonColumn>Weight:</PokemonColumn>
          <PokemonValue>{pokemon.weight}kg</PokemonValue>
        </PokemonInfo>
        <PokemonInfo> 
          <Column>
              <PokemonColumn>Ability:</PokemonColumn>
              <PokemonValue>{pokemon.ability}</PokemonValue>
          </Column>
          <Column>
              <PokemonColumn>Hidden Ability:</PokemonColumn>
              <PokemonValue>{pokemon.hiddenAbility}</PokemonValue>
          </Column></PokemonInfo>
      </TextWrapper>
    </Card>
  );
};

export default PokemonCard;
