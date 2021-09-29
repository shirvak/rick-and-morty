import classes from "./CharacterInput.module.css";
import Button from "./UI/Button/Button";
import { useState } from "react";

const CharacterInput = (props) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleFetch = () => {
    props.onFetch(userInput);
  };

  const onInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length > 0) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
    setUserInput(inputValue);
  };

  return (
    <div>
      <div className={`${classes}['form-control']`}>
        <input
          className={classes.input}
          type="number"
          placeholder="Pick a number!"
          onChange={onInputChange}
        />
        <Button type="submit" isEnabled={isButtonEnabled} onClick={handleFetch}>
          Fetch
        </Button>
        <label>Which Rick & Morty character?</label>
      </div>
    </div>
  );
};
export default CharacterInput;
