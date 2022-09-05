import React, { Suspense } from "react";

import Header from "./components/elements/Header/Header";

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <div>
        <Header></Header>
      </div>
    </Suspense>
  );
};

export default App;
