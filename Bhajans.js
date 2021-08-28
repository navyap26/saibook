function Bhajans({currentBhajan, onEditBhajan}) {
  const onEditField = (key, value) => {
    // key is either title or body, value is the change
    onEditBhajan({
      ...currentBhajan,
      [key]: value, // setting key to whatever value was edited
    });
  };

  if (!currentBhajan)
    return <div className="no-active-note">No Bhajan Selected</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Bhajan Title"
          value={currentBhajan.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Bhajan lyrics..."
          value={currentBhajan.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>

      <div className="app-main-note-preview">
        <input type="file" id="upload-file"/>
        <button>Upload Audio</button>
        <audio id="audio" controls>
            <source src="" id="src" />
        </audio>
    </div>

    </div>
  );
}

export default Bhajans;
