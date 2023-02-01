import { useState } from "react";
import DeleteContent from "./DeleteContent";
const DeletePopup = ({ blogs, handleDeletePopup, toggle, setToggle }) => {
  const [search, setSearch] = useState("");
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
          onSubmit={handleDeletePopup}
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
            placeholder="Search your blog to delete"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            style={{ margin: "1rem", height: "40px" }}
          />
          <div
            style={{
              minHeight: "0px",
              maxHeight: "40vh",
              margin: "1rem",
              background: "#fff",
              borderRadius: "0.25rem",
              overflowY: "scroll",
            }}
          >
            <DeleteContent
              blogs={blogs.filter((item) => {
                return item.heading
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })}
            />
          </div>
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
            Delete
          </button>
        </form>
      )}
    </div>
  );
};
export default DeletePopup;
