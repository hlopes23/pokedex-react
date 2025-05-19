import styled from "styled-components";
import React from "react";

type PokemonSelectorProps = {
  handleSelectedPokemon: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedPokemon: string;
};


const Select = styled.select`
padding: 5px;
padding-right: 5px;
  font-size: 16px;
  border: 1px solid;
  border-color: ${({ name }) => {
        switch (name) {
          case 'mewtwo':
            return 'rgb(177, 94, 210)'
          case 'pikachu':
            return 'rgb(214, 211, 39)';
          case 'charizard':
            return 'rgb(201, 98, 13)';
          case 'pidgeot':
            return 'rgb(134, 95, 37)';
          case 'gyarados':
            return 'rgb(15, 52, 236)';
        }
          }};
  border-radius: 20px;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    scale: 1.1
  }
`;



const PokemonSelector: React.FC<PokemonSelectorProps> = ({ selectedPokemon, handleSelectedPokemon }) => {
  return (
    <div>
      <Select name={selectedPokemon} onChange={handleSelectedPokemon}>
        <option value="mewtwo">Mewtwo</option>
        <option value="charizard">Charizard</option>
        <option value="pikachu">Pikachu</option>
        <option value="pidgeot">Pidgeot</option>
        <option value="gyarados">Gyarados</option>
      </Select>
    </div>
  );
};

export default PokemonSelector;