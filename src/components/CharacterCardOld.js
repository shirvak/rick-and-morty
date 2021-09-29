import { Fragment } from "react";
import classes from "./CharacterCard.module.css";
import UnknownCharacter from "./UnknownCharacter";
import CharacterErrorCard from "./CharacterErrorCard";

const CharacterCardOld = ({ character, errorMessage, isLoading }) => {
  let content;
  if (errorMessage) {
    content = <CharacterErrorCard errorMessage={errorMessage} />;
  } else if (isLoading) {
    content = <div>Loading..</div>;
  } else if (character) {
    content = (
      <Fragment>
        <img src={character.image}></img>
        <h1>{character.name}</h1>
        <span>
          #{character.id}, {character.status}, {character.species},{" "}
          {character.gender}.<span>origin: {character.origin.name}</span>
          <span>location: {character.location.name}</span>
        </span>
      </Fragment>
    );
  } else {
    content = <UnknownCharacter />;
  }
  return <div className={classes.card}>{content}</div>;
};

export default CharacterCardOld;
