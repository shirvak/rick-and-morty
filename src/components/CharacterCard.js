import classes from "./CharacterCard.module.css";
import ErrorCharacter from "./icons/errorCharacter";
import UnknownCharacter from "./icons/unknownCharacter";

const CharacterCard = ({ character, errorMessage, isLoading }) => {
  let image, title, text;

  if (isLoading) {
    image = "Loading";
    text = [""];
  } else if (errorMessage) {
    image = <ErrorCharacter />;
    title = "XXX";
    text = [errorMessage];
  } else if (character) {
    title = character.name;
    image = <img className={classes.photo} src={character.image} />;
    text = [
      `#${character.id}, ${character.status}, ${character.species}, ${character.gender}.
      `,
      `origin: ${character.origin.name}
      `,
      `location: ${character.location.name}`,
    ];
  } else {
    image = <UnknownCharacter />;
    title = "???";
  }

  return (
    <div className={classes.card}>
      <div className={classes.photoWrapper}>{image}</div>
      <div className={classes.details}>
        {title && <h1 className={classes.title}>{title}</h1>}
        {text && (
          <div className={classes.text}>
            {text.map((line, key) => (
              <span key={key}>
                {line}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
