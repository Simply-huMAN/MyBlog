import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
  const localItems = JSON.parse(localStorage.getItem("myblogs"));
  const myTempBlog = {
    id: 1,
    check: false,
    heading: "How to write your first blog",
    blog: "To write your blog, tap the options bar on the top of the screen (in mobile, the options bar is at the top right), then click Add Blog. You are good to go now.",
  };
  const [blogs, setBlog] = useState(localItems ? localItems : [myTempBlog]);
  // const [newBlog, setNewBlog] = useState("");
  const [search, setSearch] = useState("");

  // const addBlog = (blog) => {
  //   const id = blogs.length ? blogs.length + 1 : 1;
  //   const myNewBlog = {
  //     id: id,
  //     check: false,
  //     heading: blog,
  //     blog: blog,
  //   };
  //   const blogItems = [...blogs, myNewBlog];
  //   setBlog(blogItems);
  //   localStorage.setItem("myblogs", JSON.stringify(blogItems));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!newBlog) return;
  //   addBlog(newBlog);
  //   setNewBlog("");
  // };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        border: "1px solid #fa233e",
      }}
    >
      <Header blogs={blogs} setBlog={setBlog} />
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
          placeholder="Enter a blog name here to search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
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
          Search
        </button>
      </div>
      {blogs.length ? (
        <Content
          blogs={blogs.filter((item) => {
            return item.heading.toLowerCase().includes(search.toLowerCase());
          })}
          id={blogs.id}
        />
      ) : (
        <p style={{ color: "#fa233e", fontWeight: "600", textAlign: "center" }}>
          You have no blogs to show
        </p>
      )}
      <Footer />
    </div>
  );
}

export default App;
