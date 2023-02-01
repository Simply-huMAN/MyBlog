const UnitBlog = ({ blog }) => {
  return (
    <div
      style={{
        border: "1px solid #000",
        margin: "0.25rem",
        padding: "1rem",
        borderRadius: "0.25rem",
        background: "#44D492",
      }}
    >
      <p style={{ fontSize: "1.25rem", fontWeight: "500", margin: "0" }}>
        {blog.heading}
      </p>
      <p style={{ fontSize: "0.75rem", margin: "0.1rem" }}>{blog.blog}</p>
    </div>
  );
};
export default UnitBlog;
