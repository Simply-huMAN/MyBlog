const AddBlog = ({ newBlog, setNewBlog, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "space-evenly",
          margin: "1rem",
        }}
      >
        <input
          type="text"
          required
          style={{ width: "80vw", height: "30px" }}
          placeholder="Enter a new blog here and click Add Blog"
          value={newBlog}
          onChange={(e) => {
            setNewBlog(e.target.value);
          }}
        />
        <button
          type="submit"
          style={{
            background: "#88f7e2",
            borderRadius: "0.25rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};
export default AddBlog;
