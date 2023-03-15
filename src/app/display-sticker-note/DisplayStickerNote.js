import React, { useState } from "react";
const DisplaytickerNote = ({
  dayOfMonth,
  monthName,
  currentYear,
  onClose,
  onSave,
}) => {
  const [note, setNote] = useState("");

  const handleNoteChange = event => {
    setNote(event.target.value);
  };

  const handleSaveClick = () => {
    onSave(note);
    onClose();
  };
  const date = new Date(`${monthName} ${dayOfMonth}, ${currentYear}`);
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${date
    .getFullYear()
    .toString()
    .slice(-2)}`;
  return (
    <div>
      <p>{formattedDate}</p>
      <input type="text" value={note} onChange={handleNoteChange} />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DisplaytickerNote;
