import React, { useState } from "react";

import Users from "./Pages/Users";
import Restaurant from './Pages/Restaurant';

const App = () => {

  const [ logged, setLogged ] = useState(false);

  const visibleElement = logged ? <Restaurant /> : <Users setLogged={setLogged} />;

  return (
    <>
      { visibleElement }
    </>
  );
}

export default App;
