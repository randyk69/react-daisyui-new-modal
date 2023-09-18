import { useRef, useCallback } from "react";
import {
  Button,
  Modal,
} from "react-daisyui";

import './App.css';

function App() {
  const ref = useRef(); 

  const handleShow = useCallback(() => {
    ref.current?.showModal();  
  }, [ref]);

  return (
    <div className="App">
      <h5>DaisyUI Modal</h5>
      <Button className="w-32" onClick={handleShow}>
        Open Modal
      </Button>
      <Modal 
        backdrop={true}
        ref={ref}
      > 
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click outside to close</Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
