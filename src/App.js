import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [treeData, settreeData] = useState([]);
  const [treeThingsEditing, settreeThingsEditing] = useState("");

  useEffect(() => {
    const json = JSON.stringify(treeData);
    localStorage.setItem("treeData", json);
  }, [treeData]);

  useEffect(() => {
    const json = localStorage.getItem("treeData");
    const savedtreeData = JSON.parse(json);
    if (savedtreeData) {
      settreeData(savedtreeData);
    }
  }, []);

  const submitEdits = (event, idToEdit) => {
    event.preventDefault();
    const updatedtreeData = treeData.map((treeThings) => {
      if (treeThings.id === idToEdit) {
        return {
          id: treeThings.id,
          fullName: event.target.fullName.value,
          address: event.target.address.value,
          treeType: event.target.treeType.value,
          treeAge: event.target.treeDate.value,
          treeDate: event.target.treeDate.value,
        };
      } else {
        return treeThings;
      }
    });
    settreeData(updatedtreeData);
    settreeThingsEditing("");
  };

  const addtreeThings = (event) => {
    event.preventDefault();
    const newtreeThings = {
      id: Math.random().toString(36).substr(2, 9),
      fullName: event.target.fullName.value,
          address: event.target.address.value,
          treeType: event.target.treeType.value,
          treeAge: event.target.treeAge.value,
          treeDate: event.target.treeDate.value,
    };
    settreeData([...treeData, newtreeThings]);
    event.target.fullName.value = "";
    event.target.address.value = "";
    event.target.treeType.value = "";
    event.target.treeAge.value = "";
    event.target.treeDate.value = "";
  };

  const deletetreeThings = (idToDelete) => {
    const filteredtreeData = treeData.filter((treeThings) => treeThings.id !== idToDelete);
    settreeData(filteredtreeData);
  };

  return (
    <div className="App">
        <h1>Add your tree tracking data</h1>
      <h3>Take part in our initiative in making our city a greener and cleaner place, by keeping track of the trees you plant on your property</h3>
      <form onSubmit={addtreeThings}>
      {/* <label for="fullName">Full Name</label> */}
      <input type="text" name="fullName" placeholder="enter your full name" />
      {/* <label for="address">Address</label> */}
      <input type="text" name="address" placeholder="enter your address" />
      {/* <label for="treeType">Type of tree planted</label> */}
      <input type="text" name="treeType" placeholder="enter the type of tree you planted" />
      {/* <label for="treeType">Age of tree planted</label> */}
        <input type="number" name="treeAge" placeholder="enter the approximate age of the tree" />
        {/* <label for="treeDate">Approximate date the tree was planted</label> */}
        <input type="date" name="treeDate" placeholder="enter the date you planted the tree" />
        <input type="Submit" />
      </form>
      {console.log(treeData)}
      <hr />
      <form onSubmit={(e) => submitEdits(e, treeThingsEditing)}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>Full name</td>
              <td>Address</td>
              <td>Type of tree</td>
              <td>Age of tree</td>
              <td>Date of tree planted</td>
              <td style={{ width: "110px" }}>Options</td>
            </tr>
          </thead>
          <tbody>
            {treeData.map((treeThings) => (
              <tr key={treeThings.id}>
                <td>
                  {treeThings.id !== treeThingsEditing ? (
                    treeThings.fullName
                  ) : (
                    <textarea
                      name="fullName"
                      defaultValue={treeThings.fullName}
                      style={{ width: "100%" }}
                    ></textarea>
                  )}
                </td>
                <td>
                  {treeThings.id !== treeThingsEditing ? (
                    treeThings.address
                  ) : (
                    <textarea
                      name="address"
                      defaultValue={treeThings.address}
                      style={{ width: "100%" }}
                    ></textarea>
                  )}
                </td>
                <td>
                  {treeThings.id !== treeThingsEditing ? (
                    treeThings.treeType
                  ) : (
                    <textarea
                      name="treeType"
                      defaultValue={treeThings.Treetype}
                      style={{ width: "100%" }}
                    ></textarea>
                  )}
                </td>
                <td>
                  {treeThings.id !== treeThingsEditing ? (
                    treeThings.treeAge
                  ) : (
                    <textarea
                      name="treeAge"
                      defaultValue={treeThings.treeAge}
                      style={{ width: "100%" }}
                    ></textarea>
                  )}
                </td>
                <td>
                  {treeThings.id !== treeThingsEditing ? (
                    treeThings.treeDate
                  ) : (
                    <textarea
                      name="treeAge"
                      defaultValue={treeThings.treeAge}
                      style={{ width: "100%" }}
                    ></textarea>
                  )}
                </td>
                <td>
                  {treeThings.id !== treeThingsEditing ? (
                    <>
                      <button onClick={() => deletetreeThings(treeThings.id)}>
                        Delete
                      </button>
                      <button
                        onClick={() => settreeThingsEditing(treeThings.id)}
                        style={{ marginLeft: "10px" }}
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <button type="Submit">Submit Edits</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
