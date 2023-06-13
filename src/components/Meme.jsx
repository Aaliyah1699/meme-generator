import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topInput: "",
    bottomInput: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme-container">
      <div className="meme-form">
        <div className="meme-input">
          <input
            className="input"
            placeholder="Top text"
            type="text"
            name="topInput"
            value={meme.topInput}
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="Bottom text"
            type="text"
            name="bottomInput"
            value={meme.bottomInput}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="meme-btn" onClick={getMemeImage}>
        Get a new meme image 🖼️
      </button>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topInput}</h2>
        <h2 className="meme-text bottom">{meme.bottomInput}</h2>
      </div>
    </div>
  );
};
export default Meme;
