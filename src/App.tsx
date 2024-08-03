import { useRef, useState } from "react";
import onShift from "./cypher";

function App() {
  const [outputString, setOutputString] = useState("");
  const inputStringRef = useRef<HTMLInputElement>(null);
  const inputShiftRef = useRef<HTMLInputElement>(null);
 
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      inputStringRef.current !== undefined &&
      inputShiftRef.current !== undefined
    ) {
      const input = inputStringRef?.current?.value ?? '';
      const shift = inputShiftRef?.current?.value ?? -1;
      const shiftedValue = onShift(input , shift as number);
      setOutputString(shiftedValue);
    }
  };

  return (
    <>     
      <div>
        <form onSubmit={onSubmit} name="cypherform" id="cypherform" role="form">
          <label htmlFor="inputstring">input string:</label>
          <br />
          <input
            type="text"
            id="inputstring"
            name="inputstring"
            ref={inputStringRef}
          />
          <br />
          <label htmlFor="inputshift">shift:</label>
          <br />
          <input
            type="text"
            id="inputshift"
            name="inputshift"
            defaultValue="-1"
            ref={inputShiftRef}
          />
          <br />
          <label htmlFor="outputstring">output string:</label>
          <br />
          <input
            type="text"
            id="outputstring"
            name="outputstring"
            disabled
            value={outputString}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
