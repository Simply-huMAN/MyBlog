import { useState } from "react";
import DeleteUnit from "./DeleteUnit";
const DeleteContent = ({ blogs }) => {
  const [newCheck, setNewCheck] = useState(false);
  const handleCheck = () => {
    setNewCheck(!newCheck);
    // blog.check = !newCheck;
  };
  return (
    <section>
      <div>
        {blogs.map((blog) => (
          <DeleteUnit
            key={blog.id}
            blog={blog}
            newCheck={newCheck}
            setNewCheck={setNewCheck}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    </section>
  );
};
export default DeleteContent;
