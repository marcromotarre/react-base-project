import React from "react";

const HookComponent = () => {
  const location = "Seattle, WA";

  return (
    <div>
      <form>
        <label htmlFor="location">
          <input id="location" value={location} placeholder="Location"></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookComponent;
