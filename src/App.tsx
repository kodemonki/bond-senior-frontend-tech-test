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
        <h1>The Bots Frontend coding challenge</h1>
        <p>
          For this challenge we would like you to create a{" "}
          <a href="https://en.wikipedia.org/wiki/Caesar_cipher">
            Caeser Cipher
          </a>
          . You will create an input, which will take any string and apply the
          cipher, then display the results below.
        </p>
        <h2>The Spec</h2>
        <ul>
          <li>
            Create a form which takes a string input, and outputs the string
            with the cipher applied
          </li>
          <li>
            Add a form element to set if the cipher is applied forwards or
            backwards
          </li>
          <li>Numbers & special characters should be ignored</li>
        </ul>

        <h2>Getting started</h2>
        <ul>
          <li>Open a terminal and run `npm run dev`</li>
          <li>A second terminal can be opened to run tests: `npm run test`</li>
        </ul>

        <h2>Considerations</h2>
        <ul>
          <li>No libraries please</li>
          <li>Please provide the solution with tests & types</li>
          <li>Expected time should be 1 hour</li>
        </ul>
        <p>
          Please fork this repo and send us a link to your solution. Good luck!
        </p>
      </div>
      <hr />
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
