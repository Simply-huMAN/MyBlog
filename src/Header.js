import { useState } from "react";
import AddPopup from "./AddPopup";
import ModifyPopup from "./ModifyPopup";
import DeletePopup from "./DeletePopup";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blogtext1 from "./blogtext1.png";

const Header = ({ blogs, setBlog }) => {
  // const [isAdd, setIsAdd] = useState(false);
  // const [isDelete, setIsDelete] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [modifyToggle, setModifyToggle] = useState(false);
  // const toggleAdd = () => {
  //   setIsAdd(!isAdd);
  // };
  // const toggleDelete = () => {
  //   setIsDelete(!isDelete);
  // };

  // Add new blog
  const [newHeading, setNewHeading] = useState("");
  const [newText, setNewText] = useState("");
  const handleAddPopup = (e) => {
    e.preventDefault();
    if (!newHeading && !newText) return;
    handleNewAddPopup(newHeading, newText);
    setNewHeading("");
    setNewText("");
  };
  const handleNewAddPopup = (heading, blog) => {
    const id = blogs.length ? blogs.length + 1 : 1;
    const newAdd = {
      id: id,
      check: false,
      heading: heading,
      blog: blog,
    };
    const newAddBlog = [...blogs, newAdd];
    setBlog(newAddBlog);
    localStorage.setItem("myblogs", JSON.stringify(newAddBlog));
    setToggle(false);
  };

  const handleModifyPopup = (e) => {
    e.preventDefault();
    // Do more here
  };

  const handleDeletePopup = (e) => {
    e.preventDefault();
    for (let index = 0; index < blogs.length; index++) {
      let newBlog;
      let iD;
      console.log(
        `index: ${index} --> Outside id: ${blogs[index].id} and check: ${blogs[index].check}`
      );
      if (blogs[index].check === true) {
        iD = blogs[index].id;
        console.log(`index: ${index} --> To be deleted id: ${iD}`);
        newBlog = blogs.filter((blog) => {
          return blog.id !== iD;
        });
        setBlog(newBlog);
        blogs = newBlog;
        localStorage.setItem("myblogs", JSON.stringify(newBlog));
      }
    }
    setDeleteToggle(false);
    for (let index = 0; index < blogs.length; index++) {
      blogs[index].id = index + 1;
    }
    setBlog(blogs);
    localStorage.setItem("myblogs", JSON.stringify(blogs));
  };

  const handleOptions = (check) => {
    const items = document.getElementById("items");
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    if (check) {
      items.style.display = "flex";
      bar.style.display = "none";
      close.style.display = "";
    } else {
      items.style.display = "none";
      bar.style.display = "";
      close.style.display = "none";
    }
  };
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fa233e",
          color: "#fff",
          padding: "0.5rem",
        }}
      >
        <img src={blogtext1} alt="" height={40} />
        <FontAwesomeIcon
          id="bar"
          icon={faBars}
          size="xl"
          style={{ cursor: "pointer" }}
          onClick={() => handleOptions(true)}
        />
        <FontAwesomeIcon
          id="close"
          icon={faXmark}
          size="xl"
          style={{ display: "none", cursor: "pointer" }}
          onClick={() => handleOptions(false)}
        />
      </div>
      <ul
        id="items"
        style={{
          display: "none",
          flexDirection: "column",
          alignItems: "center",
          background: "#fa233e",
          color: "#fff",
          fontSize: "1.25rem",
          padding: "1rem 3rem",
          listStyle: "none",
          marginTop: "0.125rem",
          transition: "display 1s",
        }}
      >
        <li style={{ cursor: "pointer" }}>
          <p
            style={{ margin: "0.25rem" }}
            onClick={() => {
              // toggleAdd();
              setToggle(true);
            }}
          >
            Add Blog
          </p>
          {toggle && (
            <AddPopup
              handleAddPopup={handleAddPopup}
              newHeading={newHeading}
              setNewHeading={setNewHeading}
              newText={newText}
              setNewText={setNewText}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}
        </li>
        <li style={{ cursor: "pointer" }}>
          <p
            style={{ margin: "0.25rem" }}
            onClick={() => {
              // toggleDelete();
              setModifyToggle(true);
            }}
          >
            Modify Blog
          </p>
          {modifyToggle && (
            <ModifyPopup
              blogs={blogs}
              handleModifyPopup={handleModifyPopup}
              toggle={modifyToggle}
              setToggle={setModifyToggle}
            />
          )}
        </li>
        <li style={{ cursor: "pointer" }}>
          <p
            style={{ margin: "0.25rem" }}
            onClick={() => {
              // toggleDelete();
              setDeleteToggle(true);
            }}
          >
            Delete Blog
          </p>
          {deleteToggle && (
            <DeletePopup
              blogs={blogs}
              handleDeletePopup={handleDeletePopup}
              toggle={deleteToggle}
              setToggle={setDeleteToggle}
            />
          )}
        </li>
      </ul>
    </header>
  );
};
export default Header;
