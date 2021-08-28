import "./App.css";
function Sidebar({
  bhajans,
  onAddBhajan,
  onDeleteBhajan,
  currentBhajan,
  setCurrentBhajan,
}) {
  return (
    <div className="app.sidebar">
      <div className="app-sidebar-header">
        <h1>Your Bhajan Book</h1>
        <button onClick={onAddBhajan}>Add</button>
      </div>

      <div className="app-sidebar-notes">
        {bhajans.map((bhajan) => (
          <div
            className={`app-sidebar-note ${
              bhajan.id === currentBhajan && "active"
            }`}
            onClick={() => setCurrentBhajan(bhajan.id)}
          >
            <div className="app-sidebar-title">
              <strong>{bhajan.title}</strong> 
              
            </div>
            <p>{bhajan.body && bhajan.body.substr(0, 15) + "..."}</p>
            <button onClick={() => onDeleteBhajan(bhajan.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
