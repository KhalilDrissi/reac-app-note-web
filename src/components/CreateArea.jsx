import React from "react";

function CreateArea() {

    const [note, setNote] = useState({
        titel: "",
        content: ""
    });




  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
