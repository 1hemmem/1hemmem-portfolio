import { useState } from "react";

export const Skillgroup = () => {
  const [opened, setOpened] = useState(false);
  return <div>
    <button onClick={setOpened(!opened)}>

    </button>
  </div>;
};
