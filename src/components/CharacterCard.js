import classes from "./CharacterCard.module.css";
import ErrorCharacter from "./icons/errorCharacter";
import UnknownCharacter from "./icons/unknownCharacter";

const CharacterCard = ({ character, errorMessage, isLoading }) => {
  const title = character?.name ?? "???";

  const image = character ? (
    <img className={classes.photo} src={character.image} />
  ) : (
    <UnknownCharacter />
  );

  const text = character
    ? [
        `#${character.id}, ${character.status}, ${character.species}, ${character.gender}.
      `,
        `origin: ${character.origin.name}
      `,
        `location: ${character.location.name}`,
      ]
    : [];

  return (
    <div className={classes.card}>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <div className={classes.photoWrapper}>
            {errorMessage ? <ErrorCharacter /> : image}
          </div>
          <div className={classes.details}>
            <h1 className={classes.title}>{errorMessage ? "XXX" : title}</h1>
            <div className={classes.text}>
              {text.map((line, key) => (
                <span key={key}>{line}</span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterCard;
