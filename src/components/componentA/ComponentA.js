import { memo } from "react";

const ComponentA = (props) => {
  console.warn("rerender A", props);

  return (
    <div {...props}>
      test
      <span className="comp">ComponentA</span>
    </div>
  );
};

export default memo(ComponentA);
