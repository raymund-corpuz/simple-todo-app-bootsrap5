import React, { useState } from "react";

const App = () => {
  const [emailInfo, setEmailInfo] = useState([]);
  const [newEntry, setNewEntry] = useState({ name: "", email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setEmailInfo([...emailInfo, newEntry]);
    setNewEntry({ name: "", email: "" });
    console.log(emailInfo);
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
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              Add Task
            </button>
            <button type="reset" class="btn btn-secondary ms-2">
              Reset
            </button>
          </div>
        </form>
      </div>

      {emailInfo.map((item, i) => (
        <div class=" container list-group mt-4" key={i}>
          <div class="list-group-item d-flex justify-content-between">
            <span>{item.name}</span>
            <span>{item.email}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;

function TaskList(props) {
  return (
    <div>
      <div class="container mt-4">
        <h2>List of Rows</h2>
        <div class="list-group">
          <div class="list-group-item d-flex justify-content-between">
            <span>{props.name}</span>
            <span>{props.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
