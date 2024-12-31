import React, { useState } from "react";
import { add } from "./Helpers";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      setError(null);
      const normalizedInput = input.replace(/\\n/g, "\n");
      const sum = add(normalizedInput);
      setResult(sum);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCalculate();
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        onKeyPress={handleKeyPress}
        style={{ width: "300px", padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleCalculate}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </div>
  );
};
export default StringCalculator;
