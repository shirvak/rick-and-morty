import React from "react";
import CharacterInput from "./components/CharacterInput";
import CharacterCard from "./components/CharacterCard";
import classes from "./App.module.css";
import { useState } from "react";

function App() {
  const [character, setCharacter] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchHandler = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      const characterData = await response.json();
      if (!response.ok) {
        throw new Error(characterData.error);
      }

      setCharacter(characterData);
      setErrorMessage(undefined);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className={classes.form}>
        <CharacterInput onFetch={fetchHandler} />
      </section>
      <div>
        <CharacterCard
          character={character}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default App;
