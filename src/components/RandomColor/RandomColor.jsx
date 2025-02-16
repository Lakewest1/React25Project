import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Function for generating HEX color
  function handleHex() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  }

  // Function for generating RGB color
  function handleRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  // Change color automatically based on selected type
  useEffect(() => {
    typeOfColor === "hex" ? handleHex() : handleRgb();
  }, [typeOfColor]);

  return (
    <div
      className="Random"
      style={{
        width: "100%",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.5s ease-in-out",
      }}
    >
      <div className="button-container">
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={typeOfColor === "hex" ? handleHex : handleRgb}>
          Create Random Color
        </button>
      </div>

      <div
        className="display"
        style={{
          width: "80%",
          maxWidth: "500px",
          height: "150px",
          marginTop: "30px",
          textAlign: "center",
          background: "orange",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h3>
          {typeOfColor === "hex" ? "HEX COLOR IS HERE" : "RGB COLOR IS HERE"}
        </h3>
        <h2>{color}</h2>
      </div>

      <style>
        {`
          .button-container {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
          }
          button {
            background: black;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            border-radius: 5px;
          }
          button:hover {
            background: darkgray;
          }
          @media (max-width: 768px) {
            .display {
              width: 90%;
            }
            button {
              font-size: 14px;
              padding: 8px 15px;
            }
          }
          @media (max-width: 480px) {
            .button-container {
              flex-direction: column;
              align-items: center;
            }
            button {
              width: 80%;
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RandomColor;
