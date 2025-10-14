import { useEffect, useRef } from "react";
import * as THREE from "three";
import Experience from "./Classes/Experience/Experience";

function App() {
  const canvas = useRef(null);

  useEffect(() => {
    // import experience class:
    const experience = new Experience(canvas.current);
    console.log(experience);
  });

  return (
    <>
      <canvas ref={canvas}></canvas>
    </>
  );
}

export default App;
