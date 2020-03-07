import React, {Fragment} from 'react';
import useWindowSize from './custom-hooks/useWindowSize';

const App = () => {
  const windowSize = useWindowSize();
    return (
      <Fragment>
        <h1>The screen width is: </h1>
        <span style={{ fontSize: "30px"}}>{windowSize}</span>
      </Fragment>
    );
  };

export default App