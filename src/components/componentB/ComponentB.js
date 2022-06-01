import { memo } from "react";

const ComponentB = () => {
  console.warn("rerender B");

  return <div>ComponentB</div>;
};

export default memo(ComponentB);
