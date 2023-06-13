import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topInput: "",
    bottomInput: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  return (
    <div className="meme-container">
      <form className="meme-form">
        <div className="meme-input">
          <input
            className="input"
            placeholder="Top text"
            type="text"
            name="topInput"
          />
          <input
            className="input"
            placeholder="Bottom text"
            type="text"
            name="bottomInput"
          />
        </div>
      </form>
      <button className="meme-btn" type="submit">
        Get a new meme image 🖼️
      </button>
    </div>
  );
};
export default Meme;
