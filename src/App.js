import React from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App flex">
      <div className="button-type">Button Types</div>
      <Button text="SOLID" type="solid" />
      <Button text="OUTLINED" type="outlined" />
      <Button text="FLAT" type="flat" />

      <div className="button-type">Button Sizes</div>

      <Button text="LARGE" size="lg" />
      <Button text="MEDIUM" size="md" />
      <Button text="SMALL" size="sm" />
      <Button text="FLAT SMALL" size="sm" />
      <Button text="OUTLINED SMALL" size="sm" />

      <div className="button-type">Button With Icon</div>

      <Button text="SAMPLE TEXT" type="flat" icon="true" />
      <Button text="SAMPLE TEXT" size="lg" icon="true" />
      <Button text="SAMPLE TEXT" size="md" icon="true" />
      <Button text="SAMPLE TEXT" size="md" type="outlined" icon="true" />
    </div>
  );
}

export default App;
