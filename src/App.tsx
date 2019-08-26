import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import ExternalWindowPortal from "./ExternalWindowPortal";

const App: React.FC = () => {
  const [isEjected, setEjected] = useState(false);
  return (
    <div>
      <button onClick={() => setEjected(!isEjected)}>Toggle Ejected</button>
      {isEjected ? (
        <React.Fragment>
          <ExternalWindowPortal listenForUnload={() => setEjected(false)}>
            <CodeEditor />
          </ExternalWindowPortal>
        </React.Fragment>
      ) : (
        <CodeEditor />
      )}
    </div>
  );
};

export default App;
