const ModifyPopup = ({ toggle, setToggle, handleModifyPopup }) => {
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
          onSubmit={handleModifyPopup}
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
          <div
            style={{
              margin: "1rem",
              background: "#fff",
              borderRadius: "0.25rem",
              padding: "0.5rem",
              color: "#fa233e",
              fontWeight: "500",
            }}
          >
            This feature is under developement! If you have any suggestions,
            mail us <a href="mailto:malothaditya006@gmail.com">here</a>
          </div>
          {/* <button
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
            Modify
          </button> */}
        </form>
      )}
    </div>
  );
};
export default ModifyPopup;
