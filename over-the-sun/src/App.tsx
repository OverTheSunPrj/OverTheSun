import { useEffect, useState } from "react";
import "./App.css";
import { appWindow } from "@tauri-apps/api/window";

function App() {  
  const[size, setSize] = useState([1920,1080]);
  
  useEffect(() => {
    appWindow.innerSize().then((innerSize) => {
      setSize([innerSize.width, innerSize.height]);
    });
  });
  return (
    <iframe 
      src={'src-phaser/overthesun.html?width='+ size[0] + '&height=' + size[1]}
    ></iframe>
  );
}

export default App;
