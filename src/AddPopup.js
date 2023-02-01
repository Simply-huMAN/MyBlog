const AddPopup = ({
  handleAddPopup,
  newHeading,
  setNewHeading,
  newText,
  setNewText,
  toggle,
  setToggle,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        background: "#000",
        zIndex: "3",
        width: "100vw",
        height: "100vh",
        opacity: "0.98",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "default",
      }}
    >
      {toggle && (
        <form
          onSubmit={handleAddPopup}
          style={{
            background: "#fa233e",
            maxWidth: "800px",
            width: "80vw",
            borderRadius: "0.25rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              //   display: "relative",
              //   left: "100px",
              margin: "-0.75rem",
              background: "#fff",
              color: "#fa233e",
              width: "30px",
              height: "30px",
              textAlign: "center",
              borderRadius: "55%",
              cursor: "pointer",
            }}
            onClick={() => setToggle(false)}
          >
            x
          </span>
          <input
            type="text"
            required
            placeholder="Enter your heading here"
            style={{ margin: "1rem", height: "40px" }}
            value={newHeading}
            onChange={(e) => {
              setNewHeading(e.target.value);
            }}
          />
          <textarea
            name="blogtext"
            required
            id="blogtext"
            rows="10"
            maxLength={1000}
            style={{
              margin: "1rem",
              minHeight: "20vh",
              height: "40px",
              resize: "vertical",
              maxHeight: "60vh",
            }}
            value={newText}
            placeholder="Enter your blog here"
            onChange={(e) => {
              setNewText(e.target.value);
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              margin: "1rem",
              height: "40px",
              cursor: "pointer",
              background: "#44d492",
              borderRadius: "0.25rem",
              outline: "none",
            }}
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};
export default AddPopup;
