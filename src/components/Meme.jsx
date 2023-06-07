const Meme = () => {
  return (
    <div className="meme-container">
      <form className="meme-form">
        <div className="meme-input">
          <input
            className="top-input"
            placeholder="#"
            type="text"
            name="top-input"
          />
          <input
            className="bottom-input"
            placeholder="#"
            type="text"
            name="bottom-input"
          />
        </div>
        <button className="meme-btn" type="submit">
          Get a new meme image 🖼️
        </button>
      </form>
    </div>
  );
};
export default Meme;
