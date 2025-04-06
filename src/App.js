import React, { useState } from "react";

const App = () => {
  const [emailInfo, setEmailInfo] = useState([]);
  const [newEntry, setNewEntry] = useState({ name: "", email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    // if (!newEntry.name.trim()  !newEntry.email.trim()) return;
    if (!newEntry.name || !newEntry.email)
      return alert("Please input name and email");
    const entryWithId = { ...newEntry, id: Date.now() };
    setEmailInfo([...emailInfo, entryWithId]);
    setNewEntry({ name: "", email: "" });
  }

  return (
    <>
      <div class="container mt-4">
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            {" "}
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Task..."
                value={newEntry.name}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, name: e.target.value })
                }
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Email Address
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={newEntry.email}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, email: e.target.value })
                }
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Add Task
            </button>
            <button type="reset" class="btn btn-secondary ms-2">
              Reset
            </button>
          </div>
        </form>
      </div>

      {emailInfo.map((item) => (
        // <div class=" container list-group mt-4" key={i}>
        //   <div class="list-group-item d-flex justify-content-between">
        //     <span>{item.name}</span>
        //     <span>{item.email}</span>
        //     <DeleteBtn />
        //   </div>
        // </div>
        <TaskList
          item={item}
          key={item.id}
          emailInfo={emailInfo}
          setEmailInfo={setEmailInfo}
        />
      ))}
    </>
  );
};

export default App;

function TaskList({ item, emailInfo, setEmailInfo }) {
  return (
    <div>
      <div class="container mt-4">
        <div class="list-group">
          <div class="list-group-item d-flex justify-content-between">
            <span>{item.name}</span>
            <span>{item.email}</span>
            <DeleteBtn
              id={item.id}
              emailInfo={emailInfo}
              setEmailInfo={setEmailInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DeleteBtn({ id, setEmailInfo, emailInfo }) {
  function handleDelete(id) {
    console.log("delete", id);
    setEmailInfo(emailInfo.filter((item) => item.id !== id));
  }
  return (
    <button class="btn btn-danger ms-2" onClick={() => handleDelete(id)}>
      Delete
    </button>
  );
}
