import "./index.css";
import React from 'react';
import 'tldraw/tldraw.css'
import { Tldraw } from 'tldraw';

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="test"/>
      </div>
    </div>
  );
}

export default App;
