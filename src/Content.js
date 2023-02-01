import UnitBlog from "./UnitBlog";

const Content = ({ blogs }) => {
  return (
    <section>
      <div>
        {blogs.map((blog) => (
          <UnitBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};
export default Content;
