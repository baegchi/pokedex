import React,{useState} from "react";
import Popup from "./Popup";
const PokemonThumb = ({ id, image, name, type, _callback }) => {
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);}
  const style = type + " thumb-container";
  return (
    <>
      <div className={style}>
        <button onClick={togglePopup}>&hearts;</button>
        <div className="number">
          <small>#0{id}</small>
        </div>

        <img src={image} alt={name} />
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      </div>
      {isOpen && (
        <Popup
          name={name}
          content={
            <>
              <b>Design your Popup</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button>Test button</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
};

export default PokemonThumb;
