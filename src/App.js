import { useCallback, useState } from "react";
import ComponentA from "./components/componentA/ComponentA";
import ComponentB from "./components/componentB/ComponentB";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increase = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <div onClick={increase}>
      Нажми - {counter}
      <div>
        <ComponentA
          css={[
            { color: "red", ".comp": { color: "green" } },
            { fontSize: counter + "px" },
          ]}
        />
        <ComponentB />
      </div>
    </div>
  );
};
