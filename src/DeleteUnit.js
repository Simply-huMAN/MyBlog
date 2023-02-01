const DeleteUnit = ({ newCheck, setNewCheck, handleCheck, blog }) => {
  return (
    <div
      key={blog.id}
      style={{
        border: "1px solid #000",
        margin: "0.25rem",
        padding: "1rem",
        borderRadius: "0.25rem",
        background: "#44D492",
      }}
    >
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          value={newCheck}
          onClick={() => {
            handleCheck();
            blog.check = !newCheck;
          }}
          style={{ marginRight: "0.5rem", width: "30px" }}
        />
        <p style={{ fontSize: "1.25rem", fontWeight: "500", margin: "0" }}>
          {blog.heading}
        </p>
      </div>
      <p style={{ fontSize: "0.75rem", margin: "0.1rem" }}>{blog.blog}</p>
    </div>
  );
};
export default DeleteUnit;
