import { useEffect, useState } from "react";
import uuid from "react-uuid"; // install package
import "./App.css";
import Bhajans from "./Bhajans";
import Sidebar from "./Sidebar";

function App() {
  const [bhajans, setBhajans] = useState(
    localStorage.bhajans ? JSON.parse(localStorage.bhajans) : []
  );// when refreshed, uses prev data else use empty arr

  const [currentBhajan, setCurrentBhajan] = useState(false); // default is false -- no active note

  useEffect(() => {
    localStorage.setItem("bhajans", JSON.stringify(bhajans));
  }, [bhajans]);

  const onAddBhajan = () => {
    const newBhajan = {
      id: uuid(),
      title: "Untitled Bhajan",
      body: "",
    };

    setBhajans([newBhajan, ...bhajans]);
  };

  const onDeleteBhajan = (idDelete) => {
    setBhajans(bhajans.filter((bhajan) => bhajan.id !== idDelete)); // filter checks if statement is true, if true, bhajan stays, else deletes
  };

  const getCurrentBhajan = () => {
    return bhajans.find((bhajan) => bhajan.id === currentBhajan);
  };

  const onEditBhajan = (editedBhajan) => {
    const editedBhajanArr = bhajans.map((bhajan) => {
      if (bhajan.id === currentBhajan) {
        return editedBhajan;
      }

      return bhajan;
    });

    setBhajans(editedBhajanArr);
  };

  return (
    <div className="App">
      <Sidebar
        bhajans={bhajans}
        onAddBhajan={onAddBhajan}
        onDeleteBhajan={onDeleteBhajan}
        currentBhajan={currentBhajan}
        setCurrentBhajan={setCurrentBhajan}
      />
      <Bhajans currentBhajan={getCurrentBhajan()} onEditBhajan={onEditBhajan} />
    
    </div>
  );
}

export default App;
