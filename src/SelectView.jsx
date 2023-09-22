import React from "react";

function SelectView({ onSelectChange }) {
  const handleSelectChange = (event) => {
    const value = event.target.value;
    onSelectChange(value);
  };

  return (
    <>
      <label htmlFor="view-select">Choose a filter:</label>
      <select
        name="viewsOptions"
        id="View-select"
        onChange={handleSelectChange}
      >
        <option value="">--Please choose an option--</option>
        <option value="roles">Roles</option>
        <option value="tags">Tags</option>
      </select>
    </>
  );
}

export { SelectView };
