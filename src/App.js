import axios from "axios";
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
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      console.log("response:", response);
      const characterData = await response.data;
      setCharacter(characterData);
      setErrorMessage(undefined);
    } catch (error) {
      setErrorMessage(error.message);
      setCharacter(undefined);
    } finally {
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
