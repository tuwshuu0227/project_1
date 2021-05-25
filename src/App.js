import Login from './Login';
import User from './User';

import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [status, setStatus] = useState(true);

  return (
    <>
      { status ? <Login status={status} setStatus={setStatus} /> : <User />}
    </>
  );
}

export default App;
