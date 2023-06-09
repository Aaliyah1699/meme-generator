const Meme = () => {
  return (
    <div className="meme-container">
      <form className="meme-form">
        <div className="meme-input">
          <input
            className="input"
            placeholder="Top text"
            type="text"
            name="top-input"
          />
          <input
            className="input"
            placeholder="Bottom text"
            type="text"
            name="bottom-input"
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
