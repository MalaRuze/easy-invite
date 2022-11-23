import React from "react";

function InputScreen() {
  return (
    <div>
      <form>
        <label>
          Event name:
          <input type="text" name="name" />
        </label>
        <label>
          Start Date
          <input type="text" name="name" />
        </label>
        <label>
          Start Time:
          <input type="text" name="name" />
        </label>
        <button>+ End Date and Time</button>
        <label>
          Location:
          <input type="text" name="name" />
        </label>
        <label>
          Event description:
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
}

export default InputScreen;
